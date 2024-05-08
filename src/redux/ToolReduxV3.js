import {configureStore, createSlice} from '@reduxjs/toolkit'

const cs = createSlice({
    name: 'tool-redux-v3',
    initialState: {
        weight: 132
    },
    reducers: {
        add(state, action) {
            console.log('add action', action)
            return {weight: state.weight + 1}
        },
        minus(state, action) {
            console.log('minus action', action)
            return {weight: state.weight - 1}
        },
        multiply(state, action) {
            console.log('multiply action', action)
            return {weight: state.weight * 2}
        }
    }
})

const {add, minus, multiply} = cs.actions

const store = configureStore({
    reducer: cs.reducer
})

store.subscribe(() => {
    console.log('state changed', store.getState())
})


export default function App() {

    return (
        <>
            <div>Tool Redux V3 ===========</div>
            <button onClick={() => store.dispatch(add({name: 'ian', age: 33}))}>add</button>
            <button onClick={() => store.dispatch(minus({name: 'ian', age: 33}))}>minus</button>
            <button onClick={() => store.dispatch(multiply({name: 'ian', age: 33}))}>multiply</button>
            <div>Tool Redux V3 ===========</div>
        </>
    )

}