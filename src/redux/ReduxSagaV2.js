import {call, put, takeEvery} from 'redux-saga/effects'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";

function add(n1, n2) {
    return n1 + n2
}

function minus(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function* compute() {
    console.log('run compute')
    let addResult = yield call(add, 3, 7)
    console.log('addResult', addResult)
    let minusResult = yield call(minus, 3, 7)
    console.log('minusResult', minusResult)
    let multiplyResult = yield call(multiply, 3, 7)
    console.log('multiplyResult', multiplyResult)
}

function* computeSaga() {
    console.log('run compute saga ... ')
    yield takeEvery('math_compute', compute)
}

function sagaReducer(state = {value: 0}, action) {
    console.log('saga reducer state', state, ', action', action)
    return {
        org: 'mike',
        age: 33,
        address: 'shenzhen'
    }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(sagaReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(computeSaga)

const action = type => {
    store.dispatch({type})
}

export default function App() {
    return (
        <>
            <div>Redux Saga V2 ========</div>
            <button onClick={() => action('math_compute')}>add</button>
            <button>minus</button>
            <button>multiply</button>
            <div>Redux Saga V2 ========</div>
        </>
    )
}