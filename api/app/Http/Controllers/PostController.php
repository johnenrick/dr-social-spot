<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Generic\GenericController;
use App;
class PostController extends GenericController
{
  function __construct(){
    $this->model = new App\Models\Post();
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
        'post_reactions' => [],
        'post_comments' => [
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
            'post_comments' => [
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
            ]
          ]
        ],
        'post_reactions_count' => [
          'is_child' => true,
          'true_table' => 'post_reactions',
          'validation_required' => false
        ],
      ]
    ];
    $this->initGenericController();
  }
}
