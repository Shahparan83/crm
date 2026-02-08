<!DOCTYPE html>
<html>

<head>
    <title>Add Task</title>
</head>

<body>

    <h2>Add New Task</h2>

    @if ($errors->any())
        <ul style="color:red">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif

    <form method="POST" action="{{ route('tasks.store') }}">
        @csrf

        <label>Task Name:</label><br>
        <input type="text" name="name"><br><br>

        <label>Work Description:</label><br>
        <textarea name="work_description"></textarea><br><br>

        <label>Work Distributor:</label><br>
        <input type="text" name="work_distributor"><br><br>

        <label>Assign Date:</label><br>
        <input type="date" name="assign_date"><br><br>

        <label>Submission Date:</label><br>
        <input type="date" name="submission_date"><br><br>

        <button type="submit">Save Task</button>
    </form>

    <br>
    <a href="{{ route('tasks.index') }}">⬅ Back</a>

</body>

</html>
