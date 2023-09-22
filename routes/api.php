<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Panel\ExerciseController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Panel\FormController;
use App\Http\Controllers\Panel\MovementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/auth')->group(function () {
    Route::post("login", [AuthenticatedSessionController::class, 'store']);
    Route::post('/register', [RegisteredUserController::class, 'store']);
});

Route::prefix('/panel')->group(function () {
    Route::resource('exercises', ExerciseController::class);
    Route::resource('movements', MovementController::class);
    Route::resource('forms', FormController::class);
});
