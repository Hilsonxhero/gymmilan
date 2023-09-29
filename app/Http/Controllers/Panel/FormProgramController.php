<?php

namespace App\Http\Controllers\Panel;

use App\Models\Form;
use App\Services\ApiService;
use Illuminate\Http\Request;
use App\Models\WorkoutProgram;
use App\Http\Controllers\Controller;
use App\Models\WorkoutProgramMovement;
use App\Models\WorkoutProgramMovementValue;
use App\Http\Resources\Panel\WorkoutProgramResource;

class FormProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $id)
    {
        $form = Form::find($id);
        $programs = $form->programs()->orderByDesc('created_at')->get();
        // $programs = FormResource::collection($programs);
        ApiService::_success($programs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $id)
    {
        $request->validate([
            'class' => ['required'],
        ]);
        $program = WorkoutProgram::query()->create([
            'form_id' => $id,
            'class' => $request->class,
        ]);
        $programs = $request->input('programs');
        foreach ($programs as $program_item) {
            $workoutProgramMovement =  WorkoutProgramMovement::query()->create([
                'workout_program_id' => $program->id,
                'type' => $program_item['type']['value']
            ]);
            switch ($program_item['type']['value']) {
                case 1:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                            'program_movement_id' => $workoutProgramMovement->id,
                            'movement_id' => $movement_item['movement']['id'],
                            'exercise_id' => $movement_item['movement_type']['id'],
                            'value' => $movement_item['value'],
                            'repeat' => $movement_item['repeat'],
                            'practise' => $movement_item['practise'],
                            'title' => $movement_item['title'],
                        ]);
                    }
                    break;
                case 2:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        $movement_repeat = $movement_item['repeat'];
                        if ($movement_item['movement']['is_aerobic'] && !$movement_item['movement']['is_repeater']) {
                            $movement_repeat = null;
                        }
                        $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                            'program_movement_id' => $workoutProgramMovement->id,
                            'movement_id' => $movement_item['movement']['id'],
                            'exercise_id' => $movement_item['movement_type']['id'],
                            'value' => $movement_item['value'],
                            'repeat' => $movement_repeat,
                            'practise' => $movement_item['practise'],
                            'title' => $movement_item['title'],
                        ]);
                    }
                    break;
                case 3:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        foreach ($movement_item['values'] as $key => $value_item) {
                            $movement_repeat = $movement_item['repeat'];
                            if ($movement_item['movement']['is_aerobic'] && !$movement_item['movement']['is_repeater']) {
                                $movement_repeat = null;
                            }
                            $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                                'program_movement_id' => $workoutProgramMovement->id,
                                'movement_id' => $movement_item['movement']['id'],
                                'exercise_id' => $movement_item['movement_type']['id'],
                                'value' => $value_item['value'],
                                'repeat' => $movement_repeat,
                                'practise' => $movement_item['practise'],
                                'title' => $movement_item['title'],
                            ]);
                        }
                    }
                    break;

                case 4:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        foreach ($movement_item['values'] as $key => $value_item) {
                            $movement_repeat = $value_item['repeat'];
                            if ($movement_item['movement']['is_aerobic'] && !$movement_item['movement']['is_repeater']) {
                                $movement_repeat = null;
                            }
                            $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                                'program_movement_id' => $workoutProgramMovement->id,
                                'movement_id' => $movement_item['movement']['id'],
                                'exercise_id' => $movement_item['movement_type']['id'],
                                'value' => $value_item['value'],
                                'repeat' => $movement_repeat,
                                'practise' => $movement_item['practise'],
                                'title' => $movement_item['title'],
                            ]);
                        }
                    }
                    break;

                default:

                    break;
            }
        }


        ApiService::_success("Successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show($form, string $id)
    {
        $program = WorkoutProgram::find($id);
        ApiService::_success(new WorkoutProgramResource($program));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $form, string $id)
    {
        $request->validate([
            'class' => ['required'],
        ]);
        $program = WorkoutProgram::find($id);
        $program->update([
            'class' => $request->class,
        ]);
        $program->movements()->delete();
        $programs = $request->input('programs');
        foreach ($programs as $program_item) {
            $workoutProgramMovement =  WorkoutProgramMovement::query()->create([
                'workout_program_id' => $program->id,
                'type' => $program_item['type']['value']
            ]);
            switch ($program_item['type']['value']) {
                case 1:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                            'program_movement_id' => $workoutProgramMovement->id,
                            'movement_id' => $movement_item['movement']['id'],
                            'exercise_id' => $movement_item['movement_type']['id'],
                            'value' => $movement_item['value'],
                            'repeat' => $movement_item['repeat'],
                            'practise' => $movement_item['practise'],
                            'title' => $movement_item['title'],
                        ]);
                    }
                    break;
                case 2:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        $movement_repeat = $movement_item['repeat'];
                        if ($movement_item['movement']['is_aerobic'] && !$movement_item['movement']['is_repeater']) {
                            $movement_repeat = null;
                        }
                        $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                            'program_movement_id' => $workoutProgramMovement->id,
                            'movement_id' => $movement_item['movement']['id'],
                            'exercise_id' => $movement_item['movement_type']['id'],
                            'value' => $movement_item['value'],
                            'repeat' => $movement_repeat,
                            'practise' => $movement_item['practise'],
                            'title' => $movement_item['title'],
                        ]);
                    }
                    break;
                case 3:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        foreach ($movement_item['values'] as $key => $value_item) {
                            $movement_repeat = $movement_item['repeat'];
                            if ($movement_item['movement']['is_aerobic'] && !$movement_item['movement']['is_repeater']) {
                                $movement_repeat = null;
                            }
                            $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                                'program_movement_id' => $workoutProgramMovement->id,
                                'movement_id' => $movement_item['movement']['id'],
                                'exercise_id' => $movement_item['movement_type']['id'],
                                'value' => $value_item['value'],
                                'repeat' => $movement_repeat,
                                'practise' => $movement_item['practise'],
                                'title' => $movement_item['title'],
                            ]);
                        }
                    }
                    break;

                case 4:
                    foreach ($program_item['movement'] as $key => $movement_item) {
                        foreach ($movement_item['values'] as $key => $value_item) {
                            $movement_repeat = $value_item['repeat'];
                            if ($movement_item['movement']['is_aerobic'] && !$movement_item['movement']['is_repeater']) {
                                $movement_repeat = null;
                            }
                            $workoutProgramMovementValue = WorkoutProgramMovementValue::query()->create([
                                'program_movement_id' => $workoutProgramMovement->id,
                                'movement_id' => $movement_item['movement']['id'],
                                'exercise_id' => $movement_item['movement_type']['id'],
                                'value' => $value_item['value'],
                                'repeat' => $movement_repeat,
                                'practise' => $movement_item['practise'],
                                'title' => $movement_item['title'],
                            ]);
                        }
                    }
                    break;

                default:

                    break;
            }
        }
        ApiService::_success("Successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $form, string $id)
    {
        $program = WorkoutProgram::find($id);
        $program->delete();
        ApiService::_success($program);
    }
}
