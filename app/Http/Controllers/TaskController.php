<?php

namespace App\Http\Controllers;

use Log;
use App\Task;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\TaskRepository;

class TaskController extends Controller
{
    protected $tasks;

    public function __construct(TaskRepository $tasks)
    {
        $this->middleware('auth');

        $this->tasks = $tasks;
    }

    public function index(Request $request)
    {
        // $tasks = $request->user()->tasks()->get();
        // Log::info(print_r($request->user()->tasks(), true));
        Log::info($request->user());
        return view('tasks.index', [
            'tasks' => $this->tasks->forUser($request->user()),
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
          'name' => 'required|max:255',
        ]);

        $request->user()->tasks()->create([
          'name' => $request->name,
        ]);

        return redirect('/tasks');
    }

    public function destroy(Request $request, Task $task) {
        $this->authorize('destroy', $task);

        $task->delete();

        return redirect('/tasks');
    }

    public function getReactTasks(Request $request)
    {
        return view('tasks.react_tasks');
    }

    public function testReact(Request $request)
    {
        return view('tasks.test_react');
    }
}
