<?php

namespace App\Http\Resources\Panel;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkoutProgramMovementValueResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'movement' => $this->movement,
            'program' => $this->program,
            'value' => $this->value,
            'repeat' => $this->repeat,
            'title' => $this->title,
            'practise' => $this->practise,
            'exercise' => $this->exercise,
        ];
    }
}
