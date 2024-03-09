import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {useState} from "react";

// ...
import {helloSaga} from './sagas'

function counterReducer(state = {value: 0}, action) {
    switch (action.type) {
        case 'add':
            return {value: state.value + 1}
        case 'minus':
            return {value: state.value - 1}
        case 'multiply':
            return {value: state.value * 2}
    }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    counterReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})

const Counter = () => {

    console.log('store state value', store.getState())

    const [count, setCount] = useState(0)

    store.subscribe(() => {
        setCount(store.getState().value)
    })

    return (
        <div>
            <button onClick={() => action('add')}>
                Increment
            </button>
            {' '}
            <button onClick={() => action('minus')}>
                Decrement
            </button>
            {' '}
            <button onClick={() => action('multiply')}>
                Decrement
            </button>
            <hr/>
            <div>
                Clicked: {count} times
            </div>
        </div>
    )

}


export default function () {

    return (
        <>
            <p>This is redux saga app</p>
            <Counter/>
        </>
    )

}