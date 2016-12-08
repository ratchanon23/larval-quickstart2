import React, { Component } from 'react';
import {render} from 'react-dom';


class TaskHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', date: new Date()};
  }

  _handleAdd() {
    console.log("add tasks!!!");

    this.props.handleClick(this.state.name);
    this.setState({name: ""});
    // this.props.handleClick(this.state.name);
    // alert('A name was submitted: ' + this.state.name);
  }

  _handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return(
      <div className="panel-body">
        <form action="#" method="POST" className="form-horizontal">
            <div className="form-group">
                <label htmlFor="task-name" className="col-sm-3 control-label">Task</label>

                <div className="col-sm-6">
                    <input type="text" id="task-name" className="form-control" value={this.state.name} onChange={this._handleChange.bind(this)}/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-3 col-sm-6">
                    <button type="button" className="btn btn-default" onClick={this._handleAdd.bind(this)}>
                        <i className="fa fa-plus"></i> Add Task
                    </button>
                </div>
            </div>
        </form>
      </div>
    );
  }
}

class TaskItem extends Component {
  render() {
   return(
     <div>
        <span>{this.props.taskId}. </span>
        <span>{this.props.taskName} </span>
        <button type="button" className="btn btn-default" onClick={this.props.handleClick.bind(this)}>Delete Task</button>
     </div>
     );
   }
}

class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [
        {id: 1, name: "ABC"},
        {id: 2, name: "DEF"},
        {id: 3, name: "SSS"},
        {id: 4, name: "AAA"}
    ]};
  }

  _handleAdd(taskName) {
    var taskId = new Date().valueOf();
    console.log("_handleAdd:" + taskName + ", " + taskId);

    // TODO UPDATE STATE
    var newTasks = this.state.tasks;
    newTasks.push({
      id: taskId,
      name: taskName
    });
    this.setState({tasks: newTasks});
  }

  _handleDelete(taskId) {
    console.log("_handleDelete:" + taskId);
    // console.log(this.state.tasks.length);

    // Delete and Update state
    var index = this.state.tasks.findIndex((task)=>task.id == taskId);
    console.log("Delete index " + index);
    var newState = this.state.tasks.splice(index, 1);
    this.setState(newState);

    // TODO UPDATE STATE
    // for (var i = 0; i < this.state.tasks.length; i++) {
    //   // console.log(this.state.tasks[i].id);
    //   if (this.state.tasks[i].id == taskId) {
    //     console.log(this.state.tasks[i].id + ", " + taskId);
    //
    //     var newState = this.state.tasks.splice(i, 1);
    //     // console.log(newState);
    //     this.setState(newState);
    //   }
    // }
  }

  render() {
   return(
     <div>
        <div><TaskHeader handleClic
        k={this._handleAdd.bind(this)} /></div>
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">
                Current Tasks
            </div>
            <div className="panel-body">
              {
                this.state.tasks.map((task) => <TaskItem key={task.id} taskId={task.id} taskName={task.name} handleClick={this._handleDelete.bind(this, task.id)} />)
              }
            </div>
          </div>
        </div>
     </div>
     );
   }
}

var APP_CONTAINER_DOM_ID = 'app-container';
var _appDest = document.getElementById(APP_CONTAINER_DOM_ID);

if (_appDest) {
 render((
   <TaskView />
 ), _appDest);
}

// get index state
// getAlarmIndex(id) {
//   return this._state.alarms.findIndex((alarm)=>alarm.id == id);
// }

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root');
// );
