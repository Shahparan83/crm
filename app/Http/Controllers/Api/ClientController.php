<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class ClientController extends Controller
{
    //
    public function totalClients()
    {
        $totalClients = \App\Models\Client::count();

        return response()->json(['total_clients' => $totalClients]);
    }
}
