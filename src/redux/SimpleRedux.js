import {createStore} from "redux";

function counterReducer(state = {value: 0}, action) {
    switch (action.type) {
        case 'add':
            return {value: state.value + 1}
        case 'minus':
            return {value: state.value - 1}
        case 'multiply':
            return {value: state.value * 2}
            return state
    }
}

let store = createStore(counterReducer)


export default function App() {

    console.log('create simple redux')
    store.subscribe(() => {
        console.log('state value', store.getState())
    })
    return (
        <>
            <div>Simple Redux=========</div>
            <button onClick={() => {
                store.dispatch({type: 'add'})
            }}>add
            </button>
            <button onClick={() => {
                store.dispatch({type: 'minus'})

            }}>minus
            </button>
            <button onClick={() => {
                store.dispatch({type: 'multiply'})

            }}>multiply
            </button>
            <div>Simple Redux=========</div>
        </>
    )
}