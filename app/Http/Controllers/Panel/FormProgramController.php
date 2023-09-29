<?php

namespace App\Http\Controllers\Panel;

use App\Models\Form;
use App\Services\ApiService;
use Illuminate\Http\Request;
use App\Models\WorkoutProgram;
use App\Http\Controllers\Controller;

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
    public function store(Request $request)
    {
        $request->validate([
            'form_id' => ['required'],
            'class' => ['required'],
        ]);

        $program = WorkoutProgram::query()->create([
            'form_id' => $request->form_id,
            'class' => $request->class,
        ]);
        ApiService::_success($program);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $form = Form::find($id);
        ApiService::_success($form);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $form, string $id)
    {
        $request->validate([
            'form_id' => ['required'],
            'class' => ['required'],
        ]);
        $program = WorkoutProgram::find($id);
        $program->update([
            'form_id' => $request->form_id,
            'class' => $request->class,
        ]);
        ApiService::_success($program);
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
