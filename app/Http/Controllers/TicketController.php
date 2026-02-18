<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    public function index()
    {
        return Inertia::render('Tickets/index', [
            'tickets' => Ticket::latest()->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Tickets/create');
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

    public function show(Ticket $ticket)
    {
        $ticket->load('replies');

        return Inertia::render('Tickets/show', [
            'ticket' => $ticket,
        ]);
    }

    public function edit(Ticket $ticket)
    {
        return Inertia::render('Tickets/edit', [
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

    public function reply(Request $request, Ticket $ticket)
    {
        $request->validate([
            'message' => 'required',
        ]);

        $ticket->replies()->create([
            'message' => $request->message,
        ]);

        return back();
    }
}
