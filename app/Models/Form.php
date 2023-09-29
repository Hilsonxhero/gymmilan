<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Form extends Model
{
    use HasFactory, SoftDeletes;


    protected $fillable = [
        'first_name',
        'last_name',
        'mobile',
        'height',
        'weight',
        'age',
        'sports_history',
        'modified_date',
        'illness',
        'purpose',
        'use_duration',
        'is_payed',
    ];

    public function programs()
    {
        return $this->hasMany(WorkoutProgram::class);
    }
}
