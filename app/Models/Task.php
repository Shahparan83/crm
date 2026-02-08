<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //
    protected $fillable = [
        'name',
        'work_description',
        'work_distributor',
        'assign_tasks',
        'assign_date',
        'submission_date',
    ];
}
