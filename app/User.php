<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
   public function card(){
       return $this->hasOne('App\Card');
   }
}
