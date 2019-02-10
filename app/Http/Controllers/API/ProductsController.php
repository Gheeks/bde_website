<?php

namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;


class ProductsController extends Controller
{
    public function all()
    {
        $products = Product::all();

        $results = [];
        foreach ($products as $product)
        {
            $results[] = [
                'id' => $product->id,
                'name' => $product->name,
                'image' => $product->image,
                'price' => $product->price,
                'stock' => $product->getStock(),
                'quantity_min' => $product->quantity_min,
                'expired_at' => $product->expired_at
            ];
        }

        return $results;
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required|numeric',
            'image' => 'required'
        ]);

        if ($validator->fails())
            return response(['success' => false, 'errors' => $validator->errors()], 500);

        $product = new Product;
        $product->name = $request->get('name');
        $product->price = $request->get('price');
        $product->image = $request->get('image');

        $product->save();

        return ['success' => true];
    }

    public function edit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|numeric',
            'name' => 'required',
            'price' => 'required|numeric',
            'image' => 'required'
        ]);

        if ($validator->fails())
            return response(['success' => false, 'errors' => $validator->errors()], 500);

        $product = Product::findOrFail($request->get('id'));
        $product->name = $request->get('name');
        $product->price = $request->get('price');
        $product->image = $request->get('image');

        $product->save();

        return ['success' => true];
    }

    public function remove(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|numeric'
        ]);
        if($validator->fails())
            return response(['success' => false, 'errors' => $validator->errors()], 500);

        $product = Product::findOrFail($request->get('id'));

        $product->delete();
        
        return ['success' => true];
    }
}
