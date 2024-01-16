// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_ATTENDANCE_API } from '../apis/api';

export const TIMESHEET_RECORD_REQUEST = 'INSERT_RECORD_REQUEST';
export const TIMESHEET_RECORD_SUCCESS = 'INSERT_RECORD_SUCCESS';
export const TIMESHEET_RECORD_FAILURE = 'INSERT_RECORD_FAILURE';


const insertRecordRequest = (data) => ({ type: TIMESHEET_RECORD_REQUEST, data });
const insertRecordSuccess = () => ({ type: TIMESHEET_RECORD_SUCCESS });
const insertRecordFailure = (error) => ({ type: TIMESHEET_RECORD_FAILURE, error });


const insertRecordApi = (data) => axios.post(ADD_ATTENDANCE_API, data);

// Worker Saga
function* insertRecord(action) {
    console.log("action1++",action);
  try {
    yield call(insertRecordApi, action.data);
    console.log("record inserted");
    yield put(insertRecordSuccess());
  } catch (error) {
    yield put(insertRecordFailure(error.message));
    console.log("timesheet not inserted++", error.message);
  }
}

// Watcher Saga
function* timesheetSaga() {
  yield takeLatest(TIMESHEET_RECORD_REQUEST, insertRecord);
}

export { insertRecordRequest, timesheetSaga };

// export default timesheetSaga;
