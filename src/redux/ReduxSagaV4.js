import {createSlice, configureStore, applyMiddleware} from '@reduxjs/toolkit'
import {delay, call, put, takeEvery} from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'

const slice = createSlice({
    name: 'redux-saga-v4',
    initialState: {
        version: '4.0.0',
        num: 3
    },
    reducers: {
        add(state, action) {
            console.log('add state', state, 'action', action)
            return {
                ...state,
                num: state.num + 1
            }
        },
        minus(state, action) {
            console.log('minus state', state, 'action', action)
            return {
                ...state,
                num: state.num - 1
            }
        },
        multiply(state, action) {
            console.log('multiply state', state, 'action', action)

            return {
                ...state,
                num: state.num * 1
            }
        }
    }
})

const {add, minus, multiply} = slice.actions

function* helloSaga() {
    console.log('hello saga v4')
    yield takeEvery('add_async', addAsync)
}

function* addAsync(action) {
    console.log('add async', action)
    yield delay(1000)
    yield put(add({payload: action.payload}))
}

const middleware = createSagaMiddleware()

const store = configureStore({
    reducer: slice.reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

middleware.run(helloSaga)

store.subscribe(() => {
    console.log('store state changed', store.getState())
})

export default function App() {


    return (
        <>
            <div>Redux Saga V4 ========</div>
            <button onClick={() => store.dispatch({type: 'add_async', payload: {tag: 'add async'}})}>add async</button>
            <button onClick={() => store.dispatch(add({tag: 'add'}))}>add</button>
            <button onClick={() => store.dispatch(minus({tag: 'minus'}))}>minus</button>
            <button onClick={() => store.dispatch(multiply({tag: 'multiply'}))}>multiply</button>
            <div>Redux Saga V4 ========</div>
        </>
    )

}