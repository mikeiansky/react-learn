import {Provider, useDispatch, useSelector} from 'react-redux'
import {configureStore, createSlice} from '@reduxjs/toolkit'

const cs = createSlice({
    name: 'react-redux-v2',
    initialState: {
        organize: 'react-redux-v2',
        version: '2.0.1',
        count: 1,
        lang: 'javascript'
    },
    reducers: {
        add: (state, action) => {
            console.log('add ', state, action)
            return {
                ...state,
                count: state.count + 1
            }
        },
        minus: (state, action) => {
            console.log('minus ', state, action)
            return {
                ...state,
                count: state.count - 1
            }
        },
        multiply: (state, action) => {
            console.log('multiply ', state, action)
            return {
                ...state,
                count: state.count * 2
            }
        }
    }
})

const cf = configureStore({
    reducer: {
        org: cs.reducer
    }
})

cf.subscribe(() => {
    console.log('state changed', cf.getState())
})

const {add, minus, multiply} = cs.actions


function Comp() {

    const dispatch = useDispatch()
    const version = useSelector(state => {
        console.log('state', state.org)
        return 'static'
    })
    // console.log('version', version)

    return (
        <>
            <button onClick={() => dispatch(add('ian', 33))}>add</button>
            <button onClick={() => dispatch(minus({company: 'ciwei', address: 'shenzhen', num: 61}))}>minus</button>
            <button onClick={() => dispatch(multiply({book: 'javascript', price: 29.99, author: 'mike'}))}>multiply
            </button>
        </>
    )
}


export default function App() {
    
    return (
        <>
            <div>React Redux V2 ========</div>
            <Provider store={cf}>
                <Comp/>
            </Provider>
            <div>React Redux V2 ========</div>
        </>
    )
}