<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutProgramMovementValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'program_movement_id',
        'movement_id',
        'exercise_id',
        'value',
        'repeat',
        'title',
        'practise'
    ];

    public function program()
    {
        return $this->belongsTo(WorkoutProgramMovement::class, 'id', 'program_movement_id');
    }

    public function movement()
    {
        return $this->belongsTo(Movement::class);
    }
}
