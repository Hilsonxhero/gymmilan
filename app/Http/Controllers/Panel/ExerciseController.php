<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Exercise;
use App\Services\ApiService;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exercises = Exercise::query()->orderByDesc('created_at')->get();
        ApiService::_success($exercises);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required']
        ]);
        $exercise = Exercise::query()->create([
            'name' => $request->name
        ]);
        ApiService::_success($exercise);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $exercise = Exercise::find($id);
        ApiService::_success($exercise);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => ['required']
        ]);
        $exercise = Exercise::find($id);
        $exercise->update([
            'name' => $request->name
        ]);
        ApiService::_success($exercise);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $exercise = Exercise::find($id);
        $exercise->delete();
        ApiService::_success($exercise);
    }
}
