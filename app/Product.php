<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    public function category(){
        return $this->belongsTo('App\Category');
    }

    public function purchases()
    {
        return $this->belongsToMany('App\Purchase')->withPivot('quantity');
    }

    public function stockEdits()
    {
        return $this->belongsToMany('App\StockEdit')->withPivot('quantity');
    }


    public function getStock()
    {
        $stock = 0;

        foreach ($this->stockEdits->all() as $stockEdit)
            $stock += $stockEdit->pivot->quantity;

        foreach ($this->purchases->all() as $purchase)
            $stock -= $purchase->pivot->quantity;

        return $stock;
    }
}
