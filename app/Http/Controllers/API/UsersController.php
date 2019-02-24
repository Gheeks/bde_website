<?php

namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\Controller;
use App\User;
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
        $re = null;
    }


}