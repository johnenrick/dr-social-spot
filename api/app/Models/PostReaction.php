<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Generic\GenericModel;

class PostReaction extends GenericModel
{
    use HasFactory;
    protected $validationRuleNotRequired = ['user_id'];
}
