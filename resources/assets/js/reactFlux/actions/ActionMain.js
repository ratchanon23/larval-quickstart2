import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import ApiMain from '../api/ApiMain';

let ActionMain = {

  fetchYears(year) {
    AppDispatcher.dispatchAsync(ApiMain.fetchYears(year), {
      request: constants.FETCH_YEAR,
      success: constants.FETCH_YEAR_SUCCESS,
      failure: constants.FETCH_YEAR_ERROR
    }, {year});
  },

  deleteTask(taskId) {
    AppDispatcher.dispatch({
      type: constants.DELETE_TASK,
      payload: {taskId}
    });
  },

  addTask(taskName, taskId) {
    AppDispatcher.dispatch({
      type: constants.ADD_TASK,
      payload: {taskName, taskId}
    });
  },

  changeTaskName(taskName) {
    AppDispatcher.dispatch({
      type: constants.CHANGE_TASK,
      payload: {taskName}
    });
  },

  editTask(taskName, taskId) {
    AppDispatcher.dispatch({
      type: constants.EDIT_TASK,
      payload: {taskName, taskId}
    });
  },

  editName(taskName) {
    AppDispatcher.dispatch({
      type: constants.EDIT_NAME,
      payload: {taskName}
    });
  }

};

export default ActionMain;