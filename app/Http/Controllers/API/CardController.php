<?php

namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\Controller;
use App\Card;
use App\User;
use Illuminate\Http\Request;

class CardController extends Controller{

    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required'
        ]);

        if($validator->fails())
            return response(['success' => false, 'errors' => $validator->errors()], 500);
       
        $ar = [];
        $result = exec('python ../RFID/lecture.py', $ar);

        $lastname = $request->get('lastname');
        $firstname = $request->get('firstname');
        $mail = $request->get('mail');

        $user = new User;
        $card = new Card;
        
        $user->name = $lastname . " " . $firstname;
        $user->email = $mail;
        $user->save();

        $card->user_id = $user->id;
        $card->year = date('Y');
        $card->coin = 0;
        $card->id_string = $result;
        $card->save();
        
        return ['success' => true,
        'id' => $card->id,
        'name' => $user->name,
        'card_id' => $card->id_string
        ];

    }

}