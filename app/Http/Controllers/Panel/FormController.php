<?php

namespace App\Http\Controllers\Panel;

use App\Enums\CommonStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\FormResource;
use App\Models\Form;
use App\Services\ApiService;
use Illuminate\Http\Request;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $forms = Form::query()->orderByDesc('created_at')->get();
        $forms = FormResource::collection($forms);
        ApiService::_success($forms);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'mobile' => ['nullable'],
            'height' => ['required'],
            'weight' => ['required'],
            'age' => ['required'],
            'sports_history' => ['required'],
            'modified_date' => ['required'],
            'illness' => ['nullable'],
            'purpose' => ['required'],
            'use_duration' => ['nullable'],
        ]);

        $form = Form::query()->create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'mobile' => $request->mobile,
            'height' => $request->height,
            'weight' => $request->weight,
            'age' => $request->age,
            'sports_history' => $request->sports_history,
            'illness' => $request->illness,
            'purpose' => $request->purpose,
            'use_duration' => $request->use_duration,
            'modified_date' => createDatetimeFromFormat($request->modified_date, 'Y/m/d')

        ]);
        ApiService::_success($form);
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
    public function update(Request $request, string $id)
    {
        $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'mobile' => ['nullable'],
            'height' => ['required'],
            'weight' => ['required'],
            'age' => ['required'],
            'sports_history' => ['required'],
            'modified_date' => ['required'],
            'illness' => ['nullable'],
            'purpose' => ['required'],
            'use_duration' => ['nullable'],
        ]);
        $form = Form::find($id);
        $form->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'mobile' => $request->mobile,
            'height' => $request->height,
            'weight' => $request->weight,
            'age' => $request->age,
            'sports_history' => $request->sports_history,
            'modified_date' => $request->modified_date,
            'illness' => $request->illness,
            'purpose' => $request->purpose,
            'use_duration' => $request->use_duration,
        ]);
        ApiService::_success($form);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $form = Form::find($id);
        $form->delete();
        ApiService::_success($form);
    }
}
