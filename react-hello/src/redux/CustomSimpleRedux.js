import {createStore} from 'redux'

const counterReducer = (state = {value: 0, name: 'ian'}, action) => {

    switch (action.type) {
        case 'add':
            return {value: state.value + 1, name: action.name}
        case 'minus':
            return {value: state.value - 1, name: action.name}
        case 'multiply':
            return {value: state.value * 2, name: action.name}
    }

}

const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log('custom simple redux state', store.getState())
})

export default function App() {

    return (
        <>
            <div>Custom Simple Redux=========</div>
            <button onClick={() => {
                store.dispatch({type:'add', name:'add-aa'})
            }}>add
            </button>
            <button onClick={() => {
                store.dispatch({type:'minus', name:'minus-bb'})
            }}>minus
            </button>
            <button onClick={() => {
                store.dispatch({type:'multiply', name:'multiply-cc'})
            }}>multiply
            </button>
            <div>Custom Redux=========</div>
        </>
    )
}