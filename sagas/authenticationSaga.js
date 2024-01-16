// sagas/authenticationSaga.js
import { put, takeLatest, call } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, loginSuccess, loginFailure, userProfile } from '../actions/authActions';
import * as loginApi from '../apis/loginApi';

function* login(action) {

    try {
        const response = yield call(loginApi.login, action.params);//action.payload
        if (response.status === 'SUCCESS') {
            // yield put({ type: LOGIN_SUCCESS, payload: response });//response.dta
            yield put(userProfile(response.User))//test
            console.log("userProfile", userProfile(response.User))
            action.onSuccess(response);
        }
        else {

            action.onSuccess(response);//response.data
        }
    } catch (error) {
        console.log("loginFailures++", error)
        action.onError(error)
    }

}

function* authenticationSaga() {
    yield takeLatest(LOGIN_REQUEST, login);
}

export default authenticationSaga;
