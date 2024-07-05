import {createStore} from 'redux'


function counterReducer(state = {value: 0}, action) {
    console.log(action.payload)
    switch (action.type) {
        case 'add':
            return {
                value: ++state.value
            }
        case 'minus':
            return {
                value: --state.value
            }
        case 'multiply':
            return {
                value: state.value * 2
            }
    }
}

const store = createStore(counterReducer)

store.subscribe(()=>{
    console.log('update', store.getState())
})

const dispatch = (action)=>{
    // console.log('dispatch', action)
    store.dispatch(action)
}

export default function App() {

    return (
        <>
            <div>
                <div>Simple Redux V2=========</div>
                <button onClick={()=> dispatch({type:'add', payload:'add-p'})}>add</button>
                <button onClick={()=> dispatch({type:'minus', payload:'minus-p'})}>minus</button>
                <button onClick={()=> dispatch({type:'multiply', payload:'multiply-p'})}>multiply</button>
                <div>Simple Redux V2=========</div>
            </div>
        </>
    )

}