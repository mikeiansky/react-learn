import createSagaMiddleware from 'redux-saga'
import {call, put, takeEvery, delay} from 'redux-saga/effects'
import {createStore, applyMiddleware} from "redux";

function* helloSaga(payload) {
    console.log('hello saga v3', payload)
    yield delay(2000)
    yield put({type: 'add', payload: {company: 'ian', num: 62}})
}

function* gather() {
    console.log('gather run')
    yield takeEvery('add_async', helloSaga)
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore((state = {height: 165, name: 'ian'},
                           action) => {
    console.log('store action', state, action)
    switch (action.type) {
        case 'add':
            console.log('add state action', state, action)
            return state
        case 'minus':
            console.log('minus state action', state, action)
            return state
        case 'multiply':
            console.log('multiply state action', state, action)
            return state
    }

}, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(gather)

store.subscribe(() => {
    console.log('store state change v3', store.getState())
})

export default function App() {


    return (
        <>
            <div>Redux Saga V3 ============</div>
            <button onClick={() => store.dispatch({
                type: 'add_async',
                payload: {info: 'add_async', version: '3.0.0'}
            })}>add async
            </button>
            <button onClick={() => store.dispatch({
                type: 'add',
                payload: {info: 'add', version: '3.0.0'}
            })}>add
            </button>
            <button onClick={() => store.dispatch({
                type: 'minus',
                payload: {info: 'minus', version: '3.0.0'}
            })}>minus
            </button>
            <button onClick={() => store.dispatch({
                type: 'multiply',
                payload: {info: 'multiply', version: '3.0.0'}
            })}>multiply
            </button>
            <div>Redux Saga V3 ============</div>
        </>
    )

}