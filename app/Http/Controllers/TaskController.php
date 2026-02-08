<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display all tasks
     */
    public function index()
    {
        $tasks = Task::all();

        return Inertia::render('Tasks/Index', compact('tasks'));
    }

    /**
     * Show form to create new task
     */
    public function create()
    {
        return Inertia::render('Tasks/Create');
    }

    /**
     * Store new task in database
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // validation (important for beginners)

        $request->validate([
            'name' => 'required',
            'work_description' => 'required',
            'work_distributor' => 'required',
            'assign_tasks' => 'required',
            'assign_date' => 'required|date',
            'submission_date' => 'required|date',
        ]);

        Task::create($request->all());

        return redirect()->route('tasks.index')
            ->with('success', 'Task created successfully');
    }

    /**
     * Display single task
     */
    public function show(Task $task)
    {
        return view('tasks.show', compact('task'));
    }

    /**
     * Show edit form
     */
    public function edit(Task $task)
    {
        return Inertia::render('Tasks/Edit', compact('task'));
    }

    /**
     * Update task
     */
    public function update(Request $request, Task $task)
    {
        $request->validate([
            'name' => 'required',
            'work_description' => 'required',
            'work_distributor' => 'required',
            'assign_tasks' => 'required',
            'assign_date' => 'required|date',
            'submission_date' => 'required|date',
        ]);

        $task->update($request->all());

        return redirect()->route('tasks.index')
            ->with('success', 'Task updated successfully');
    }

    /**
     * Delete task
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return redirect()->route('tasks.index')
            ->with('success', 'Task deleted successfully');
    }
}
