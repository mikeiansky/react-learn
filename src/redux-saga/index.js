import {createStore, applyMiddleware} from 'redux'
import {delay} from 'redux-saga'
import createSagaMiddleware from 'redux-saga'
import {useState} from "react";

// ...
import {helloSaga, gather, all} from './sagas'

function counterReducer(state = {value: 0}, action) {
    console.log('reducer state : ', state, ', action : ',action)
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

// sagaMiddleware.run(all)
sagaMiddleware.run(gather)

const action = type => store.dispatch({type})

store.subscribe(() => {
    console.log('subscribe state', store.getState())
})

const Counter = () => {

    // console.log('store state value', store.getState())

    const [count, setCount] = useState(0)

    // store.subscribe(() => {
    //     if (store.getState()) {
    //         setCount(store.getState().value)
    //     }
    // })

    return (
        <div>
            <button onClick={() => action('INCREMENT_ASYNC')}>
                IncrementAsync
            </button>
            {' '}
            <button onClick={() => action('add')}>
                Increment
            </button>
            {' '}
            <button onClick={() => action('minus')}>
                Decrement
            </button>
            {' '}
            <button onClick={() => action('multiply')}>
                Multiply
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
            <Counter />
        </>
    )

}