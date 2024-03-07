import {createSlice, configureStore} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {value: 0},
    reducers: {
        add(state, action) {
            // console.log('redux tool kit add')
            state.value = state.value + 1
        },
        minus(state, action) {
            // console.log('redux tool kit minus')
            state.value = state.value - 1
        },
        multiply(state, action) {
            // console.log('redux tool kit multiply')
            state.value = state.value * 2
        }
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