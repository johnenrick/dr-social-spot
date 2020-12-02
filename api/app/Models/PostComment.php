<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Generic\GenericModel;

class PostComment extends GenericModel
{
    use HasFactory;
    protected $validationRuleNotRequired = ['user_id', 'comment_id'];
    public function user(){
        return $this->belongsTo('App\Models\User');
    }
    public function post_comments(){
        return $this->hasMany('App\Models\PostComment');
    }
}
