import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
import ActionMain from '../../actions/ActionMain';
import TaskHeaderView from './TaskHeaderView';
import TaskItemView from './TaskItemView';

class ViewMain extends Component {

  render(){
    if (!this.props.viewInitialized) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <div>
          <TaskHeaderView btnName={this.props.storeState.btnName} 
              taskId={this.props.storeState.editId} 
              taskName={this.props.storeState.taskName}
              handleClick={this._handleAdd.bind(this)}
              handleChange={this._handleChange.bind(this)}/>
        </div>
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">
                Current Tasks
            </div>
            <div className="panel-body">
              {
                this.props.storeState.tasks.map((task) => 
                  <TaskItemView key={task.id} 
                      taskId={task.id} 
                      taskName={task.name} 
                      handleClick={this._handleDelete.bind(this, task.id)} 
                      editClick={this._handleEdit.bind(this, task.name, task.id)}
                  />)
              }
            </div>
          </div>
        </div>
     </div>
    );
  }

  _handleDelete(taskId) {
    console.log("_handleDelete:" + taskId);

    ActionMain.deleteTask(taskId);   
  }

  _handleAdd(taskName) {
    if(!this.props.storeState.editCheck) {
      var taskId = new Date().valueOf();
      console.log("_handleAdd: " + taskName + ", " + taskId + ", " + this.props.storeState.editCheck);
      ActionMain.addTask(taskName, taskId);
    }
    else {
      console.log("edit");
      ActionMain.editName(taskName);
    }
  }

  _handleChange(taskName) {
    console.log("_handleChange: " + taskName);

    ActionMain.changeTaskName(taskName);
  }

  _handleEdit(taskName, taskId) {
    console.log("_handleEdit: " + taskName + ", " + taskId);

    ActionMain.editTask(taskName, taskId);
  }

}

const STYLES = {
  label: {
    color: '#767676',
  }
};

ViewMain.propTypes = {
  viewInitialized: PropTypes.bool,
}

export default ViewMain;