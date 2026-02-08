<!DOCTYPE html>
<html>

<head>
    <title>Edit Task</title>
</head>

<body>

    <h2>Edit Task</h2>

    <form method="POST" action="{{ route('tasks.update', $task->id) }}">
        @csrf
        @method('PUT')

        <label>Task Name:</label><br>
        <input type="text" name="name" value="{{ $task->name }}"><br><br>

        <label>Work Description:</label><br>
        <textarea name="work_description">{{ $task->work_description }}</textarea><br><br>

        <label>Work Distributor:</label><br>
        <input type="text" name="work_distributor" value="{{ $task->work_distributor }}"><br><br>

        <label>Assign Date:</label><br>
        <input type="date" name="assign_date" value="{{ $task->assign_date }}"><br><br>

        <label>Submission Date:</label><br>
        <input type="date" name="submission_date" value="{{ $task->submission_date }}"><br><br>

        <button type="submit">Update Task</button>
    </form>

    <br>
    <a href="{{ route('tasks.index') }}">⬅ Back</a>

</body>

</html>
