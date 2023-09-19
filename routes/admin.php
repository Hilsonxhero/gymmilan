<?php

use Illuminate\Support\Facades\Route;

Route::prefix('panel/')->middleware('auth')->name('panel.')->group(function () {
    Route::get('dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
});
