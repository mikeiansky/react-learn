import {createStore} from "redux";

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

let store = createStore(counterReducer)

store.subscribe(() => {
    console.log('simple redux state value', store.getState())
})

export default function App() {

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