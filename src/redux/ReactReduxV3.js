import {Provider, useDispatch, useSelector} from 'react-redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'react-redux-v3', initialState: {
        version: '3.0', size: 2
    }, reducers: {
        add(state, payload) {
            console.log('add payload', payload)
            return {
                ...state,
                size: state.size + 1
            }
        }, minus(state, payload) {
            console.log('minus payload', payload)
            return {
                ...state,
                size: state.size - 1
            }
        }, multiply(state, payload) {
            console.log('multiply payload', payload)
            return {
                ...state,
                size: state.size * 2
            }
        }
    }
})

const {add, minus, multiply} = slice.actions

const store = configureStore({
    reducer: slice.reducer
})

store.subscribe(() => {
    console.log('state changed', store.getState())
})


function StoreApp() {
    const dispatch = useDispatch()

    const size = useSelector(state => {
        console.log('state select', state.size)
        return state.size
    })

    return (
        <>
            <div>React Redux V3 ==========</div>
            <button onClick={() => dispatch(add({name: 'ian', tag: 'add'}))}>add</button>
            <button onClick={() => dispatch(minus({name: 'ian', tag: 'minus'}))}>minus</button>
            <button onClick={() => dispatch(multiply({name: 'ian', tag: 'multiply'}))}>multiply</button>
            size: {size}
            <div>React Redux V3 ==========</div>
        </>
    )
}


export default function App() {


    return (<>
        <Provider store={store}>
            <StoreApp/>
        </Provider>
    </>)

}