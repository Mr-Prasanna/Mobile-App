import { put, takeLatest, call } from 'redux-saga/effects';
import { SHOW_ATTENDANCE_REQUEST, ATTENDANCE_INFO, attendanceInfo } from '../actions/showAttendanceAction';
import * as showAttendanceApi from '../apis/showAttendanceApi';

function* showAttendance(action) {

    try {
       const response = yield call(showAttendanceApi.showTimesheet, action.params);
       console.log("Showresponse++",response)
        yield put(attendanceInfo(response))
        console.log("userInfo", attendanceInfo(response))
        action.onSuccess(response);
    }
    catch (error) {
        console.log("ShowAttendanceFailure", error);
        action.onError(error);
    }
}

function* showTimesheetSaga() {
    yield takeLatest(SHOW_ATTENDANCE_REQUEST, showAttendance)
}

export default showTimesheetSaga;