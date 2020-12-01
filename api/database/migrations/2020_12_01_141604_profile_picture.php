<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProfilePicture extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_profile_pictures', function(Blueprint $table){
            $table->increments('id');
            $table->unsignedBigInteger('user_id');
            $table->text('file_name')->nullable();
            $table->text('thumbnail_file_name')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::table('user_profile_pictures', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
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
