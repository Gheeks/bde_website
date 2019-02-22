<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('api')->namespace('API')->group(function()
{
    Route::get('/products/all', 'ProductsController@all');
    Route::post('/products/add', 'ProductsController@add');
    Route::post('/products/edit', 'ProductsController@edit');
    Route::post('/products/remove', 'ProductsController@remove');

    Route::get('/inventory/all', 'InventoryController@all');
    Route::post('/inventory/edit', 'InventoryController@edit');

    Route::get('/purchases/all', 'PurchasesController@all');
    Route::post('/purchases/purchase', 'PurchasesController@purchase');

    Route::get('/categories/all', 'CategoriesController@all');
    Route::get('/categories/allNotEmpty', 'CategoriesController@allNotEmpty');

    Route::get('/users/all', 'UsersController@all');
    Route::get('/users/scan', 'UsersController@scan');

    Route::get('/users/test', function(){
        $ls = [];
        exec('ls', $ls);
        return $ls;
    });

    Route::get('/', function ()
    {
        abort(404);
    })->where('any', '.*');
    Route::get('/{any}', function ()
    {
        abort(404);
    })->where('any', '.*');
});

Route::get('/', function ()
{
    return view('website');
})->where('any', '.*');

Route::get('/{any}', function ()
{
    return view('website');
})->where('any', '.*');
