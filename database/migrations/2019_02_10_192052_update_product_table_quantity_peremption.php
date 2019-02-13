<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateProductTableQuantityPeremption extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable("products")){
            if(!Schema::hasColumn('products', 'quantity_min') && !Schema::hasColumn('products', 'expired_at')){
                Schema::table("products", function($table){
                    // Date de péremption
                    $table->timestamp('expired_at')->nullable()->default(DB::raw('CURRENT_TIMESTAMP'));
    
                    // Quantitée minimum en stock
                    $table->mediumInteger('quantity_min')->default(20);
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if(Schema::hasTable("products")){
            if(Schema::hasColumn('products', 'quantity_min') && Schema::hasColumn('products', 'expired_at')){
                Schema::table('products', function($table){
                    $table->dropColumn(['quantity_min', 'expired_at']);
                });
            }
        }
    }
}
