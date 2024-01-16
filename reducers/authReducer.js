// reducers/authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USER_PROFILE } from '../actions/authActions';

const initialState = {
    user: null,
    loading: false,
    error: null,
    userProfile: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                loading: false,
                error: action.error,
            };
        case USER_PROFILE:
            return {
                ...state,
                ...{ userProfile: action.data }
            }
        default:
            return state;
    }
};

export default authReducer;
