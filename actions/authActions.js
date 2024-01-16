// actions/authActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const USER_PROFILE = 'USER_PROFILE';
export const loginRequest = (params, onSuccess, onError) => ({
    type: LOGIN_REQUEST,
    //payload: { email, password },
    // payload: params,
    params,
    onSuccess,
    onError
});
export const userProfile = (data) => ({
    type: USER_PROFILE,
    data
})

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,

});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    error,
});
