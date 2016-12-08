import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import 'babel-polyfill';

let defaultState = {
  viewInitialized: true,
  tasks: [
    {id: 1, name: "ABC"},
    {id: 2, name: "DEF"},
    {id: 3, name: "SSS"},
    {id: 4, name: "AAA"}
  ],
  taskName: '',
  editCheck: false,
  editId: null,
  btnName: 'Add Task'
};

class StoreMain extends ReduceStore {
  getInitialState() {
    return defaultState;
  }

  getTaskIndex(taskId) {
    return this._state.tasks.findIndex((task)=>task.id == taskId);
  }

  reduce(state, action) {
    

    switch (action.type) {
      case constants.INIT_MAIN:
        var ret = 
          update(state,
            {
              $merge: action.payload.state
            }
          );
        return update(
          ret, {
            viewInitialized: {$set: true}
          }
        );

      case constants.DELETE_TASK:
        var taskIndex = this.getTaskIndex(action.payload.taskId);
        console.log("DELETE_TASK:" + taskIndex);
        return update(state, {
          tasks: {$splice: [[taskIndex, 1]]}
        });

      case constants.ADD_TASK:
        var taskId = action.payload.taskId;
        var taskName = action.payload.taskName;

        console.log("ADD_TASK: " + taskId + ", " + taskName);

        return update(state, {
          tasks: {$push: [{id: taskId, name: taskName}]},
          taskName: {$set: ''}
        });

      case constants.CHANGE_TASK:
        console.log("CHANGE_TASK : " + action.payload.taskName);
        return update(state, {
          taskName: {$set: action.payload.taskName}
        });

      case constants.EDIT_TASK:
        var name = action.payload.taskName;
        var taskIndex = action.payload.taskId;

        console.log('EDIT_TASK : ' + taskIndex + ", " + name);
        return update(state, {
          taskName: {$set: name},
          editId: {$set: taskIndex},
          editCheck: {$set: true},
          btnName: {$set: 'Save Task'}
        });

      case constants.EDIT_NAME:
        var taskName = action.payload.taskName;
        var taskId = this._state.editId;
        var index = this.getTaskIndex(taskId);
      
        console.log('EDIT_NAME : ' + taskId + ", " + taskName);
        return update(state, {
          tasks: { [index] : {name: {$set: taskName}}},
          editCheck: {$set: false},
          taskName: {$set: ''},
          editId: {$set: null},
          btnName: {$set: 'Add Task'}
        });

      default:
        return state;
    }
  }
}

export default new StoreMain(AppDispatcher);