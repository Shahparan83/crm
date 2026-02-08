<!DOCTYPE html>
<html>

<head>
    <title>Task Manager</title>
</head>

<body>

    <h2>Task List</h2>

    @if (session('success'))
        <p style="color:green">{{ session('success') }}</p>
    @endif

    <a href="{{ route('tasks.create') }}">➕ Add New Task</a>

    <br><br>

    <table border="1" cellpadding="10">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Distributor</th>
            <th>Assign Date</th>
            <th>Submission Date</th>
            <th>Action</th>
        </tr>

        @foreach ($tasks as $task)
            <tr>
                <td>{{ $task->id }}</td>
                <td>{{ $task->name }}</td>
                <td>{{ $task->work_description }}</td>
                <td>{{ $task->work_distributor }}</td>
                <td>{{ $task->assign_date }}</td>
                <td>{{ $task->submission_date }}</td>
                <td>
                    <a href="{{ route('tasks.show', $task->id) }}">View</a> |
                    <a href="{{ route('tasks.edit', $task->id) }}">Edit</a> |

                    <form action="{{ route('tasks.destroy', $task->id) }}" method="POST" style="display:inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        @endforeach

    </table>

</body>

</html>
