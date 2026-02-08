<!DOCTYPE html>
<html>

<head>
    <title>View Task</title>
</head>

<body>

    <h2>Task Details</h2>

    <p><strong>ID:</strong> {{ $task->id }}</p>
    <p><strong>Name:</strong> {{ $task->name }}</p>
    <p><strong>Description:</strong> {{ $task->work_description }}</p>
    <p><strong>Distributor:</strong> {{ $task->work_distributor }}</p>
    <p><strong>Assign Date:</strong> {{ $task->assign_date }}</p>
    <p><strong>Submission Date:</strong> {{ $task->submission_date }}</p>

    <a href="{{ route('tasks.index') }}">⬅ Back</a>

</body>

</html>
