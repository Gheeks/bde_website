<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ProductTableCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_category', function(Blueprint $table){
            $table->increments('id');
            $table->string('nom');
            $table->string('desc');
        });

        if(Schema::hasTable('products')){
            Schema::table('products', function($table)
            {
                $table->integer('category_id')->unsigned()->nullable();
                $table->foreign('category_id')->references('id')->on('product_category')->onDelete(DB::raw('set null'));;
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('product_category');
        if(Schema::hasTable('products')){
            if(Schema::hasColumn('products', 'category_id')){
                Schema::table('products', function($table){
                    $table->dropColumn('category_id');
                });
            }
        }
    }
}
