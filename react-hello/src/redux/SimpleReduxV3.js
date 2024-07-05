import {createStore} from 'redux'

const store = createStore((state = {age: 0}, action) => {
    console.log('store update action', action)
    switch (action.type) {
        case 'add':
            return {
                age: state.age + 1
            }
        case 'minus':
            return {
                age: state.age - 1
            }
        case 'multiply':
            return {
                age: state.age * 2
            }
    }
})

store.subscribe(() => {
    console.log('state changed', store.getState())
})

const action = (type, payload) => store.dispatch({type, payload})

export default function App() {

    return (
        <>
            <div>Simple Redux V3 ==========</div>
            <button onClick={() => action('add', {tag: 'add-t', info: 'simple'})}>add</button>
            <button onClick={() => action('minus', {tag: 'minus-t', info: 'simple'})}>minus</button>
            <button onClick={() => action('multiply', {tag: 'multiply-t', info: 'simple'})}>multiply</button>
            <div>Simple Redux V3 ==========</div>
        </>
    )

}