// actions.js

export const ActionTypes = {
    // Registration Form
    SAVE_REGISTRATION_FORM_DATA: 'SAVE_REGISTRATION_FORM_DATA',
    REGISTER_DATA: 'REGISTER_DATA',
    // OTP
    SEND_OTP: 'SEND_OTP',
    VERIFY_OTP: 'VERIFY_OTP',
    // User Data
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAILURE: 'REGISTER_USER_FAILURE',
};

// Registration Form Actions           //name, email, password    
export const saveRegistrationFormData = (params, onSuccess, onError) => ({//data
    type: ActionTypes.SAVE_REGISTRATION_FORM_DATA,
    // payload: { name, email, password },
    params,
    onSuccess,
    onError
});



export const verifyOTP = (email, otp, onSuccess, onError) => ({
    type: ActionTypes.VERIFY_OTP,
    payload: { email, otp },
    onSuccess,
    onError
});

export const registerData = (data) => ({
    type: ActionTypes.REGISTER_DATA,
    data
})


// OTP Actions
// export const sendOTP = (email) => ({
//     type: ActionTypes.SEND_OTP,
//     payload: email,
// });