<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function purchases()
    {
        return $this->belongsToMany('App\Purchase')->withPivot('quantity');
    }

    public function stockEdits()
    {
        return $this->belongsToMany('App\StockEdit')->withPivot('quantity');
    }
}
