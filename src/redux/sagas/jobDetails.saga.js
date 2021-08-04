import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* jobDetailsSaga(){
    yield takeEvery('GET_JOB_DETAILS', fetchJobDetails);
}

function* fetchJobDetails() {
    try {
        const response = yield axios.get('/api/job');
        console.log(response);
        yield put({ type: 'SET_JOB', payload: response.data});
    } catch (error) {
        console.log('Error GETting jobs client side', error);
    }
}

export default jobDetailsSaga;