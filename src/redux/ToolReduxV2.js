import {createSlice, configureStore} from '@reduxjs/toolkit'


const cs = createSlice({
    name: 'tool-v2',
    initialState: {
        size: 87
    },
    reducers: {
        add: (state, {type, payload}) => {
            console.log('add action', type, payload, state)
            return {size: state.size + 1}
        },
        minus: (state, action) => {
            console.log('minus action', action, state)
            return {size: state.size - 1}
        },
        multiply: (state, action) => {
            console.log('multiply action', action, state)
            return {size: state.size * 2}
        }
    }
})

const {add, minus, multiply} = cs.actions

console.log('print action ===> ')
console.log(add)

const store = configureStore({
    reducer: cs.reducer
})

store.subscribe(() => {
    console.log(store.getState())
})

export default function App() {

    return (
        <>
            <div>Tool Redux V2 =========></div>
            <div>
                <button onClick={() => {
                    store.dispatch(add({name: 'ian', age: 33}))
                }}>add
                </button>
                <button onClick={() => {
                    store.dispatch(minus({book: 'javascript', price: 29.99}))
                }}>minus
                </button>
                <button onClick={() => {
                    store.dispatch(multiply({company: 'ciwei', info: {address: 'shenzhen', num: 61}}))
                }}>multiply
                </button>
            </div>
            <div>Tool Redux V2 =========></div>
        </>
    )

}