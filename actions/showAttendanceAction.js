export const SHOW_ATTENDANCE_REQUEST = 'SHOW_ATTENDANCE_REQUEST';
export const ATTENDANCE_INFO = 'SHOW_ATTENDANCE_INFO';

export const showAttendanceRequest = (params, onSuccess, onError) => ({
    type: SHOW_ATTENDANCE_REQUEST,
    params,
    onSuccess,
    onError
});

export const attendanceInfo = (data) => ({
    type: ATTENDANCE_INFO,
    data
})