<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    protected $table = 'product_category';

    public function products(){
        return $this->hasMany('App\Product');
    }
    
}
