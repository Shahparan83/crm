@extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Create Ticket</h2>

        <form action="{{ route('tickets.store') }}" method="POST">
            @csrf

            <div class="mb-3">
                <label>Name</label>
                <input type="text" name="name" class="form-control">
            </div>

            <div class="mb-3">
                <label>Contact Number</label>
                <input type="text" name="contact_number" class="form-control">
            </div>

            <div class="mb-3">
                <label>Email</label>
                <input type="email" name="email" class="form-control">
            </div>

            <div class="mb-3">
                <label>Problem</label>
                <textarea name="problem" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit Ticket</button>
        </form>
    </div>
@endsection
