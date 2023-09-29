<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutProgram extends Model
{
    use HasFactory;

    protected $fillable = ['form_id', 'class'];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    public function movements()
    {
        return $this->hasMany(WorkoutProgramMovement::class);
    }
}
