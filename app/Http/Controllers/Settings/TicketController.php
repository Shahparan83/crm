<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index()
    {
        return Inertia::render('tickets/index', [
            'tickets' => Ticket::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('tickets/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'contact_number' => 'required',
            'email' => 'required|email',
            'problem' => 'required',
        ]);

        Ticket::create($request->all());

        return redirect()->route('tickets.index');
    }

    public function edit(Ticket $ticket)
    {
        return Inertia::render('tickets/edit', [
            'ticket' => $ticket,
        ]);
    }

    public function update(Request $request, Ticket $ticket)
    {
        $ticket->update($request->all());

        return redirect()->route('tickets.index');
    }

    public function destroy(Ticket $ticket)
    {
        $ticket->delete();

        return redirect()->route('tickets.index');
    }
}
