@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>All Tickets</h2>

        <a href="{{ route('tickets.create') }}" class="btn btn-success mb-3">Create Ticket</a>

        @if (session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($tickets as $ticket)
                    <tr>
                        <td>{{ $ticket->name }}</td>
                        <td>{{ $ticket->contact_number }}</td>
                        <td>{{ $ticket->email }}</td>
                        <td>{{ $ticket->status }}</td>
                        <td>
                            <a href="{{ route('tickets.show', $ticket->id) }}" class="btn btn-info btn-sm">View</a>
                            <a href="{{ route('tickets.edit', $ticket->id) }}" class="btn btn-warning btn-sm">Edit</a>

                            <form action="{{ route('tickets.destroy', $ticket->id) }}" method="POST"
                                style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
