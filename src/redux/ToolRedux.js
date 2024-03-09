import {createSlice, configureStore} from '@reduxjs/toolkit'

const add_f = function (state, action) {
    // console.log('redux tool kit add')
    state.value = state.value + 1
}

const minus_f = function (state, action) {
    // console.log('redux tool kit minus')
    state.value = state.value - 1
}

const multiply_f = function (state, action) {
    // console.log('redux tool kit multiply')
    state.value = state.value * 2
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: {value: 0},
    reducers: {
        add : add_f,
        minus : minus_f,
        multiply: multiply_f,
    }
})

const {add, minus, multiply} = todoSlice.actions

const store = configureStore({
    reducer: todoSlice.reducer
})

store.subscribe(()=>{
    console.log('tool redux store state', store.getState())
})

export default function App() {
    console.log('add is ', add)
    console.log('add_f is ', add_f)
    console.log('add is add_f', Object.is(add, add_f))

    return (
        <>
            <div>Tool Redux=========</div>
            <button onClick={() => {
                store.dispatch(add())
            }}>add
            </button>
            <button onClick={() => {
                store.dispatch(minus())
            }}>minus
            </button>
            <button onClick={() => {
                store.dispatch(multiply())
            }}>multiply
            </button>
            <div>Tool Redux=========</div>
        </>
    )


}