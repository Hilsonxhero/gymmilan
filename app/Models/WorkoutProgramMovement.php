<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutProgramMovement extends Model
{
    use HasFactory;

    protected $fillable = [
        'workout_program_id',
        'movement_id',
        'type',
        'value',
        'repeat',
    ];

    public function workout_program()
    {
        return $this->belongsTo(WorkoutProgram::class);
    }

    public function movement()
    {
        return $this->belongsTo(Movement::class);
    }
}
