import { SHOW_ATTENDANCE_REQUEST,ATTENDANCE_INFO } from "../actions/showAttendanceAction";

const initialState ={
    user: null,
    loading: false,
    error: null,
    attendanceInfo:{}
};

const showAttendanceReducer= (state = initialState,action) => {
 switch(action.type){

    case SHOW_ATTENDANCE_REQUEST:
        return {
             ...state,
             loading:true,
             error:null,
        };
    case ATTENDANCE_INFO:
        return {
            ...state,
            ...{attendanceInfo: action.data}
        }
    default:
        return state;

 }   
};

export default showAttendanceReducer;