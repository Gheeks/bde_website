<?php

namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\Controller;
use App\Product;
use App\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function all(){
        $categories = Category::all();

        $results = [];
        foreach($categories as $category){
            $results[] = [
                'id' => $category->id,
                'nom' => $category->nom,
                'desc' => $category->desc
            ];
        }


        return $results;
    }

    public function allNotEmpty(){
        $products = Product::all()->where('category_id', '<>', '');

        $output = [];
        $results = [];
        foreach($products as $product){
            $results[] = [
                'id' => $product->category->id,
                'nom' => $product->category->nom,
                'desc' => $product->category->desc
            ];
        }

        $results = array_unique($results, SORT_REGULAR);
        foreach($results as $elem){
            $output[] = [
                'id' => $elem['id'],
                'nom' => $elem['nom'],
                'desc' => $elem['desc']
            ];
        }
        return $output;
    }
}
