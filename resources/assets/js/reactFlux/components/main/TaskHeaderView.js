import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class TaskHeaderView extends Component {

  	_handleAdd() {
    	//console.log("add tasks!!!");

    	this.props.handleClick(this.props.taskName);
  	}

  	_handleChange(event) {
  		// console.log(event.target.value);
    	this.props.handleChange(event.target.value);
  	}

	render() {
	    return(
     		<div className="panel-body">
        		<form action="#" method="POST" className="form-horizontal">
            		<div className="form-group">
                	<label htmlFor="task-name" className="col-sm-3 control-label">Task</label>

                	<span>Task ID : {this.props.taskId} </span>
                	<div className="col-sm-6">
                    	<input type="text" id="task-name" className="form-control" value={this.props.taskName} onChange={this._handleChange.bind(this)}/>
                	</div>

            		</div>
            		<div className="form-group">
                		<div className="col-sm-offset-3 col-sm-6">
                    		<button type="button" className="btn btn-default" onClick={this._handleAdd.bind(this)}>
                        		<i className="fa fa-plus"></i> {this.props.btnName}
                    		</button>
                		</div>
            		</div>
        		</form>
      		</div>
   		);
  	}
}

TaskHeaderView.propTypes = {
  btnName: PropTypes.string.isRequired,
  taskId: PropTypes.number,
  taskName: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default TaskHeaderView;