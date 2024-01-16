import { put, call, takeLatest } from 'redux-saga/effects';
import { ADD_ATTENDANCE ,ATTENDANCE_DATA,attendanceDetails} from '../actions/attendanceAction';
import { addTimeSheet } from '../apis/addAttendanceApi';
import { ActionTypes1 } from '../actions/attendanceAction';
function* addAttendanceSaga(action) {
    console.log("action1", action)
    try {
        const response = yield call(addTimeSheet, action.params);
        console.log("attendanceSaga1++",response);        
        yield put(attendanceDetails(response))
        // console.log("addAttendanceDataSaga2+++", attendanceDetails(response))
        action.onSuccess(response);
    } catch (error) {
        // yield put({ type: ActionTypes.REGISTER_USER_FAILURE, error });
        // yield put(attendanceDetails(error))
        console.log("AttendanceFailures++", error);
        // console.log("AttendanceFailures1++", attendanceDetails(error));
        action.onError(error);
    }
}
export function* addTimeSheetSaga() {
    yield takeLatest(ActionTypes1.ADD_ATTENDANCE, addAttendanceSaga);
   
}
export default addTimeSheetSaga;