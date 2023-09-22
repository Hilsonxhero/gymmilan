<?php

namespace App\Http\Controllers\Panel;

use App\Enums\CommonStatus;
use App\Http\Controllers\Controller;
use App\Models\Movement;
use App\Services\ApiService;
use Illuminate\Http\Request;

class MovementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movements = Movement::query()->orderByDesc('created_at')->get();
        ApiService::_success($movements);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'is_aerobic' => ['required'],
            'is_repeater' => ['required'],

        ]);
        $movement = Movement::query()->create([
            'name' => $request->name,
            'is_aerobic' => $request->is_aerobic,
            'is_repeater' => $request->is_repeater,
            'status' => CommonStatus::ENABLE->value
        ]);
        ApiService::_success($movement);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $movement = Movement::find($id);
        ApiService::_success($movement);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => ['required'],
            'is_aerobic' => ['required'],
            'is_repeater' => ['required'],
        ]);
        $movement = Movement::find($id);
        $movement->update([
            'name' => $request->name,
            'is_aerobic' => $request->is_aerobic,
            'is_repeater' => $request->is_repeater,
        ]);
        ApiService::_success($movement);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $movement = Movement::find($id);
        $movement->delete();
        ApiService::_success($movement);
    }
}
