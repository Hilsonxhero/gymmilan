<?php

namespace App\Http\Resources\Panel;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Panel\WorkoutProgramMovementValueResource;

class WorkoutProgramMovementResource extends JsonResource
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
            'type' => $this->type,
            'program' => $this->program,
            'programs' => WorkoutProgramMovementValueResource::collection($this->values),
        ];
    }
}
