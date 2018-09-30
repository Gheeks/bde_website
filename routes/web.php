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
