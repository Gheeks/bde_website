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
}
