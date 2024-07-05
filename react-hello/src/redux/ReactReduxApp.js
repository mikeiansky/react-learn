import {createSlice, configureStore} from "@reduxjs/toolkit"
import {useSelector, useDispatch} from 'react-redux'

const todoSlice = createSlice({
    name: 'react-redux-todo',
    initialState: {
        value: 0,
        name: 'react-redux'
    },
    reducers: {
        add(state, action) {
            state.value = state.value + 1
        },
        minus(state, action) {
            state.value = state.value - 1
        },
        multiply(state, action) {
            state.value = state.value * 2
        }
    }
})

const {add, minus, multiply} = todoSlice.actions

export const store = configureStore({
    reducer: {
        other : todoSlice.reducer
    }
})

store.subscribe(() => {
    console.log('react redux store', store.getState())
})

export default function App() {
    const count = useSelector(state => {
        // console.log('aaaa')
        // // state.value
        // console.log(state)
        // console.log('bbbb')
        return state.other.value
    })
    const dispatch = useDispatch()

    return (
        <>
            <div>Simple React Redux=========</div>
            <button onClick={() => {
                // store.dispatch(add())
                dispatch(add())
            }}>add
            </button>
            <button onClick={() => {
                // store.dispatch(minus())
                dispatch(minus())

            }}>minus
            </button>
            <button onClick={() => {
                // store.dispatch(multiply())
                dispatch(multiply())

            }}>multiply
            </button>
            <span>{count}</span>

            <div>Simple React Redux=========</div>
        </>
    )
}