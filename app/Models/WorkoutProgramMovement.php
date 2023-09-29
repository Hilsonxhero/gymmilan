<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutProgramMovement extends Model
{
    use HasFactory;

    protected $fillable = [
        'workout_program_id',
        'type',
    ];

    protected $append = ['values'];

    public function workout_program()
    {
        return $this->belongsTo(WorkoutProgram::class);
    }
    public function values()
    {
        return $this->hasMany(WorkoutProgramMovementValue::class, 'program_movement_id', 'id');
    }
}
