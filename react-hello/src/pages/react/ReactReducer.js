import {useReducer} from "react";

function taskReducer(task, action) {

    switch (action.type) {
        case 'name' : {
            return {
                ...task,
                name: action.name
            }
        }
        case 'age': {
            return {
                ...task,
                age: action.age
            }
        }
    }

}

export default function App() {

    const [task, dispatch] = useReducer(taskReducer, {})


    return (
        <>
            <h1>This is react reducer App</h1>
            <button onClick={() => {
                dispatch({
                    type: 'name',
                    name: 'ciwei'
                })
            }}>
                update name
            </button>
            <br/>
            <button onClick={() => {
                dispatch({
                    type: 'age',
                    age: 28
                })
            }}>
                update age
            </button>
            <br/>
            Task name value is {task.name} and age is {task.age}
        </>
    )

}