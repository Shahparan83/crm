<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';

use App\Http\Controllers\ClientController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserController;

Route::resource('clients', ClientController::class);
Route::resource('users', UserController::class);
Route::resource('tickets', TicketController::class);
Route::resource('products', ProductController::class);
Route::resource('products', \App\Http\Controllers\ProductController::class);

Route::resource('tasks', TaskController::class);
