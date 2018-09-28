<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockEdit extends Model
{
    public function products()
    {
        return $this->belongsToMany('App\Product')->withPivot('quantity');
    }
}
