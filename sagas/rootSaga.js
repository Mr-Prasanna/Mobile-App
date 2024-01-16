// sagas/index.js
import { all } from 'redux-saga/effects';
import authenticationSaga from './authenticationSaga';
import registrationSaga from './registrationSaga';
import  addTimeSheetSaga from './attendanceSaga';
import showTimesheetSaga from './showAttendanceSaga';
import timesheetSaga from './timesheetSaga';

function* rootSaga() {
    yield all([
        // authenticationSaga(),
       // registrationSaga(),
        addTimeSheetSaga(),
        showTimesheetSaga(),
       // timesheetSaga(),

    ]);
}

export default rootSaga;
