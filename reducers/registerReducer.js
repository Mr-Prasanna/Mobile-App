// // reducers.js

// const initialState = {
//     registrationData: null,
//     registrationError: null,
//     otpVerified: false,
//     otpVerificationError: null,
// };

// const registrationReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'USER_REGISTERED_SUCCESS':
//             return {
//                 ...state,
//                 registrationData: action.payload,
//                 registrationError: null,
//             };
//         case 'USER_REGISTERED_ERROR':
//             return {
//                 ...state,
//                 registrationData: null,
//                 registrationError: action.payload.error,
//             };
//         case 'OTP_VERIFIED_SUCCESS':
//             return {
//                 ...state,
//                 otpVerified: true,
//                 otpVerificationError: null,
//             };
//         case 'OTP_VERIFIED_ERROR':
//             return {
//                 ...state,
//                 otpVerified: false,
//                 otpVerificationError: action.payload.error,
//             };
//         default:
//             return state;
//     }
// };

//-->
// reducers.js

import { ActionTypes } from '../actions/registerAction';

const initialRegistrationState = {
    registrationFormData: {},
    otpSent: false,
    userRegistered: false,
    user: null,
};

export function registrationReducer(state = initialRegistrationState, action) {
    switch (action.type) {
        case ActionTypes.SAVE_REGISTRATION_FORM_DATA:
            return {
                ...state,
                registrationFormData: action.payload,
            };
        // case ActionTypes.SEND_OTP:
        //     return {
        //         ...state,
        //         otpSent: true,
        //     };
        case ActionTypes.VERIFY_OTP:
            return {
                ...state,
                otpSent: false,
                userRegistered: true,
            };
        case ActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case ActionTypes.REGISTER_USER_FAILURE:
            return {
                ...state,
                userRegistered: false,
            };
        case ActionTypes.REGISTER_DATA:
            return {
                ...state,
                ...{ registerData: action.data }
            }
        default:
            return state;
    }
}


export default registrationReducer;


