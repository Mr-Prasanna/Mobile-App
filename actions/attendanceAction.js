export const ActionTypes1 = {
    ADD_ATTENDANCE :'ADD_ATTENDANCE',
    ATTENDANCE_DATA :'ATTENDANCE_DATA'
     
};
// export const ADD_ATTENDANCE = 'ADD_ATTENDANCE';
// export const ATTENDANCE_DATA ='ATTENDANCE_DATA';
export const addAttendenceRequest = (params, onSuccess, onError) => ({
    type: ActionTypes1.ADD_ATTENDANCE,
    params,
    onSuccess,
    onError
});

export const attendanceDetails=(data)=>({
type:ActionTypes1.ATTENDANCE_DATA,
data
})
