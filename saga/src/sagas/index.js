import { put, all, takeLatest, takeEvery, call } from "redux-saga/effects";
import axios from 'axios';
//import { takeEvery } from "redux-saga";
// import { takeLatest } from "redux-saga";

function getAllProducts() {
    const json = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products')
        .then(resp => resp.json());

    return Promise.resolve(json);
}


function* fetchProducts() {
    let prds = [];
    console.log('inside fetch product saga');


    const request = yield call(getAllProducts);
    console.log(`Fetch Products ${request}`);
    yield put({
        type: 'PRODUCTS_RECEIVED',
        json: request || [{ error: 'Error Occured' }]
    });
}

function* actionWatcher() {
    console.log('in action watcher saga');
    yield takeLatest("GET_PRODUCTS", fetchProducts);
    // yield takeEvery("GET_PRODUCTS", fetchProducts);
}

export default function* rootSaga() {
    console.log('in root saga');
    yield all([
        actionWatcher(),
    ]);
}