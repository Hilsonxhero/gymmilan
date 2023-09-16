<?php

use Illuminate\Support\Facades\Route;

Route::prefix('panel/admin')->middleware('auth')->name('panel.')->group(function () {
    Route::get('/dasboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
});
