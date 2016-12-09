<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Requests;
use App\User;
use App\Task;
use App\Repositories\TaskRepository;
use Log;

class ApiController extends Controller
{

  public function getTaskList(Request $request)
  {

    $task = Task::get();
    // Log::info($request->user()->task()->get());

    return response()->json([
      array("task"=>$task)
    ]);
  }

  public function getTask(Request $request, $task_id)
  {
    $task = Task::where('id', $task_id)->get();
  
    return response()->json([
      array("task"=>$task)
    ]);
  }

  public function storeTask(Request $request)
  {
    $inputs = $request->input();
    // Log::info(print_r($inputs, true));
    
    $name = $request->input("name");

    Log::info($name);

    $task = new Task();
    $task->user_id = "1";
    $task->name = $name;
    $task->save();

    return response()->json([
      // array(
      //     // Task::create(['name' => $name])
      //     "user_id" => "1",
      //     "name" => $request->input("name")
      //   )
      array("task"=>$task)
    ]);
  }

  public function updateTask(Request $request, $task_id)
  {
    // $inputs = $request->input();
    
    $name = $request->input("name");

    Log::info($name);

    $task = Task::where("id", $task_id)->update(array('name' => $name));

    return response()->json([
      array("task"=>$task)
    ]);
  }

  public function deleteTask(Request $request, $task_id)
  {
    $task = Task::where("id", $task_id)->delete();

    return response()->json([
      array("task"=>$task)
    ]);
  }
}