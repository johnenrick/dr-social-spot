<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Generic\GenericController;
use App;

class PostReactionController extends GenericController
{
    function __construct(){
        $this->model = new App\Models\PostReaction();
        $this->tableStructure = [
          'columns' => [
          ],
          'foreign_tables' => [
            'user' => [
              'foreign_tables' => [
                'user_basic_information' => [
                  'is_child' => true, 
                  'validation_required' => false
                ],
                'user_profile_picture' => ['is_child' => true]
              ]
            ],
          ]
        ];
        $this->initGenericController();
      }
}
