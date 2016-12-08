import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class TaskItemView extends Component {

  render(){
    return (
      <div>
        <span>{this.props.taskId}. </span>
        <span>{this.props.taskName} </span>
        <button type="button" className="btn btn-default" onClick={this.props.handleClick.bind(this)}>Delete Task</button>
        <button type="button" className="btn btn-default" onClick={this.props.editClick.bind(this)}>Edit Task</button>
     </div>
    );
  }

}

TaskItemView.propTypes = {
  taskId: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  editClick: PropTypes.func.isRequired
}

export default TaskItemView;