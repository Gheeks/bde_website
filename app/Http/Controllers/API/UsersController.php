<?php

namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\Controller;
use App\User;
use App\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UsersController extends Controller{


    public function all(){
        $users = User::all();

        $results = [];
        foreach($users as $user){
            $results[] = [
                'id' => $user->id,
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
	
	Log::warning($card->id);
	$user = $card->user;
	$output = [
		'id' => $user->id,
		'name' => $user->name,
		'email' => $user->email,
		'coin' => $card->coin ?? 0
	];

	return $output;
    }


}
