import {createSlice, configureStore} from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todo/sub',
    initialState: {
        value: 0,
        name: 'custom'
    },
    reducers: {
        add(state, action) {
            // console.log('add a1', action)
            state.value = state.value + 1
            state.name = action.payload.ciwei
        },
        minus(state, action) {
            state.value = state.value - 1
            state.name = action.payload.ciwei
        },
        multiply(state, action) {
            state.value = state.value * 2
            // state.name = action.payload.ciwei
            console.log('multiply tag value is', action.payload)
        }
    }
})

const store = configureStore(todoSlice)

const {add, minus, multiply} = todoSlice.actions

store.subscribe(() => {
    console.log('custom tool redux state', store.getState())
})

export default function App() {

    return (
        <>
            <div>Custom Tool Redux=========</div>
            <button onClick={() => {
                store.dispatch(add({ciwei: 'btn-add'}))
            }}>add
            </button>
            <button onClick={() => {
                store.dispatch(minus({ciwei: 'btn-minus'}))
            }}>minus
            </button>
            <button onClick={() => {
                store.dispatch(multiply('multiply'))
            }}>multiply
            </button>
            <div>Custom Tool Redux=========</div>
        </>
    )


}