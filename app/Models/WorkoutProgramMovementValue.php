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
        'value',
        'repeat',
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
