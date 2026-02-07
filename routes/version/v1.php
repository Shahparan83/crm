<?php

// prefix with v1 to indicate version 1 of the API
use Illuminate\Support\Facades\Route;

Route::get('v1/total-clients', [\App\Http\Controllers\Api\ClientController::class, 'totalClients']);
