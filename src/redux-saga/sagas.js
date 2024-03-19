import {delay} from 'redux-saga/effects'


export function* helloSaga() {
    yield delay(2000)
    console.log('Hello Sagas!')
}