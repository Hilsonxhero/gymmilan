<?php

namespace App\Http\Resources\Panel;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Panel\WorkoutProgramMovementValueResource;

class WorkoutProgramResource extends JsonResource
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
            'class' => $this->class,
            'form_id' => $this->form_id,
            'movements' => WorkoutProgramMovementResource::collection($this->movements),

        ];
    }
}
