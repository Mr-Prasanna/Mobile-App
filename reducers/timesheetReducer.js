// reducer.js
import {
    TIMESHEET__RECORD_REQUEST,
    TIMESHEET__RECORD_SUCCESS,
    TIMESHEET__RECORD_FAILURE,
  } from '../sagas/timesheetSaga';



  const initialState = {
    loading: false,
    error: null,
  };
  
  const timesheetReducer = (state = initialState, action) => {
    switch (action.type) {
      case TIMESHEET__RECORD_REQUEST:
        return { ...state, loading: true, error: null };
      case TIMESHEET__RECORD_SUCCESS:
        return { ...state, loading: false, error: null };
      case TIMESHEET__RECORD_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default timesheetReducer;
  