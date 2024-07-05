import {delay, takeEvery, take,call, put} from 'redux-saga/effects'


export function* helloSaga() {
    yield delay(2000)
    console.log('Hello Sagas!')
}

function * incrementAsync(action){
    console.log('increment async action : ', action)
    // yield call(delay, 1000)
    yield delay(1000)
    // yield put({type:'add'})
    yield put({ type: 'add' })
    console.log('increment async complete ...')

}


export function * gather(){
    console.log('gather ....... ')
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
    // yield take('INCREMENT_ASYNC', incrementAsync)
}


export function * all(){
    yield all([
        helloSaga(),
        gather()
        // incrementAsync()
    ])
}