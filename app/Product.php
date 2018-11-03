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
