<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable("products")){
            Schema::table("products", function($table){
                // Date de péremption
                $table->timestamp('expired_at')->nullable()->default(DB::raw('CURRENT_TIMESTAMP'));

                // Quantitée minimum en stock
                $table->mediumInteger('quantity_min')->default(20);
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
        //
    }
}
