import {createSlice, configureStore} from '@reduxjs/toolkit'


const cs = createSlice({
    name: 'tool-v2',
    initialState: {
        size: 87
    },
    reducers: {
        add: state => {
            console.log('add action')
            return {size: state.size + 1}
        },
        minus: state => {
            console.log('minus action')
            return {size: state.size - 1}
        },
        multiply: state => {
            console.log('multiply action')
            return {size: state.size * 2}
        }
    }
})

const {add, minus, multiply} = cs.actions

const store = configureStore({
    reducer: cs.reducer
})

store.subscribe(()=>{
    console.log(store.getState())
})

export default function App() {

    return (
        <>
            <div>Tool Redux V2 =========></div>
            <div>
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
            </div>
            <div>Tool Redux V2 =========></div>
        </>
    )

}