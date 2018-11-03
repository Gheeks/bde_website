<?php

namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\Controller;
use App\Product;
use App\StockEdit;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'items' => 'required',
        ]);

        if ($validator->fails())
            return response(['success' => false, 'errors' => $validator->errors()], 500);

        $items = $request->get('items', []);

        $stockEdit = new StockEdit;
        $stockEdit->name = $request->get('name');
        $stockEdit->description = $request->get('description', '');
        $stockEdit->save();

        foreach ($items as $_item)
        {
            $item = json_decode($_item);

            if (!isset($item->id, $item->delta_stock))
                abort(500);

            $product = Product::findOrFail($item->id);

            if ($item->delta_stock != 0)
            {
                $stockEdit->products()->attach($product->id, [
                    'quantity' => $item->delta_stock
                ]);
            }
        }

        return ['success' => true];
    }
}
