<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Generic\GenericModel;

class Post extends GenericModel
{
    use HasFactory;
    protected $validationRuleNotRequired = ['user_id'];
    public function user(){
        return $this->belongsTo('App\Models\User');
    }
}
