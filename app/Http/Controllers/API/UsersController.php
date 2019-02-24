<?php

namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\Controller;
use App\User;
use App\Card;
use Illuminate\Http\Request;

class UsersController extends Controller{


    public function all(){
        $users = User::all();

        $results = [];
        foreach($users as $user){
            $results[] = [
                'id' => $user->id,
                'card_id_string' => $user->card->id_string,
                'name' => $user->name,
                'email' => $user->email,
                'coin' => $user->card->coin ?? 0
            ];
        }

        return $results;
    }

    public function scan(){
        $ar = [];
        $result = exec('python ../RFID/lecture.py', $ar);
        
        $card = Card::where('id_string', '=', $result)->firstOrFail();
        
        
        $user = $card->user;
        $output = [
            'id' => $user->id,
            'card_id_string' => $card->id_string,
            'name' => $user->name,
            'email' => $user->email,
            'coin' => $card->coin ?? 0
        ];
        return $output;
    }

    public function addCoin(Request $request){
        $validator = Validator::make($request->all(), [
            'amount' => 'required',
            'user' => 'required'
        ]);

        if($validator->fails())
            return response(['success' => false, 'errors' => $validator->errors()], 500);

        $user = User::findOrFail($request->get('user')['id']);
        $amount = $request->get('amount');
        $card = $user->card;

        $card->coin += $amount;
        $card->save();

        return ['success' => true];
    }


}
