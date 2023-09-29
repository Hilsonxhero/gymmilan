<?php

namespace App\Http\Resources;

use App\Http\Resources\Panel\WorkoutProgramResource;
use App\Models\WorkoutProgram;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FormResource extends JsonResource
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
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'mobile' => $this->mobile,
            'height' => $this->height,
            'weight' => $this->weight,
            'age' => $this->age,
            'sports_history' => $this->sports_history,
            'illness' => $this->illness,
            'purpose' => $this->purpose,
            'use_duration' => $this->use_duration,
            'modified_date' => formatGregorian($this->modified_date, 'Y/m/d'),
            'programs' =>  WorkoutProgramResource::collection($this->programs)
        ];
    }
}
