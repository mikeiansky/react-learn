import {useState} from "react";
import {useImmer} from 'use-immer';


export default function () {

    // const [count, setCount] = useState(0)
    const [count, updateCount] = useImmer(0)
    const [person, updatePerson] = useImmer({})

    return (
        <div>
            <h1>react use state</h1>
            <button onClick={() => {
                // setCount(count + 1)
                updateCount(draft => {
                    console.log('draft value is ', draft)
                    const v = count + 1
                    return v;
                })
            }}>increment
            </button>
            <br/>
            immer count value is : {count}
            <br/>
            <button onClick={() => {
                updatePerson(draft => {
                    draft.name = 'ciwei'
                    draft.age = 35
                })
            }}>update person
            </button>
            <br/>
            person.name : {person.name}<br/>
            person.age : {person.age}<br/>
        </div>
    )

}