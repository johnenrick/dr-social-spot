<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyUserBasicInformation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_basic_informations', function(Blueprint $table){
            $table->char('title', 100)->after('birthdate')->nullable();
            $table->text('address')->after('birthdate')->nullable();
            $table->tinyInteger('gender')->after('birthdate')->nullable();
        });
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
