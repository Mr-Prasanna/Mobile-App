import { put, call, takeLatest } from 'redux-saga/effects';
import { registerUser, sendOTP, verifyOTP } from '../apis/registerApi';
import { ActionTypes, registerData } from '../actions/registerAction';

function* registerUserSaga(action) {
    console.log("action1", action)
    try {
        const response = yield call(registerUser, action.params);//action.payload
        if (response.status === 'SUCCESS') {
            // yield put({ type: ActionTypes.REGISTER_USER_SUCCESS, payload: response.data });
            yield put(registerData(response.User))//test
            console.log("resgisterData", registerData(response.User))
            action.onSuccess(response);
        }
        else {
            action.onSuccess(response);//response.data

        }
    } catch (error) {
        // yield put({ type: ActionTypes.REGISTER_USER_FAILURE, error });
        console.log("registerFailures++", error)
        action.onError(error)
    }
}


// function* sendOTPSaga(action) {
//     try {
//         yield call(sendOTP, action.payload);

//     } catch (error) {

//     }
// }

function* verifyOTPSaga(action) {
    try {
        const response = yield call(verifyOTP, action.payload.email, action.payload.otp);
        if (response.status === 'SUCCESS') {

            yield put({ type: 'OTP_VERIFIED_SUCCESS' });
            action.onSuccess(response)
        }
    } catch (error) {

      //  yield put({ type: 'OTP_VERIFIED_ERROR', error });
        console.log("otp failure :",error)
        action.onError(error)

    }
}

// function* verifyOTPSaga(action) {
//     try {
//         yield call(verifyOTP, action.payload.email, action.payload.otp);
//         yield put({ type: 'OTP_VERIFIED_SUCCESS' });

//     } catch (error) {

//         yield put({ type: 'OTP_VERIFIED_ERROR', error });
//     }
// }

export function* registrationSaga() {
    yield takeLatest(ActionTypes.SAVE_REGISTRATION_FORM_DATA, registerUserSaga);
    // yield takeLatest(ActionTypes.SEND_OTP, sendOTPSaga);
    yield takeLatest(ActionTypes.VERIFY_OTP, verifyOTPSaga);
}


export default registrationSaga;
