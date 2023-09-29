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
        return $this->belongsTo(WorkoutProgramMovement::class, 'program_movement_id', 'id');
    }
    public function exercise()
    {
        return $this->belongsTo(Exercise::class);
    }

    public function movement()
    {
        return $this->belongsTo(Movement::class, 'movement_id', 'id');
    }
}
