import { ActionTypes1 } from "../actions/attendanceAction";
// import { ADD_ATTENDANCE,ATTENDANCE_DATA } from "../actions/attendanceAction";
const initialState = {
   // user: null,
    attendanceData: {},
    //loading: false,
    error: null,
    
};

export function attendanceReducer (state = initialState, action){
   console.log("attendanceAction++",action);
    switch (action.type) {
        case ActionTypes1.ADD_ATTENDANCE:
            return {
                ...state,
                attendanceData: action
            };
        case ActionTypes1.ATTENDANCE_DATA:
            return {
                ...state,
                ...{ attendanceData: action}
            }
        default:
            return state;

    }}

    export default attendanceReducer;