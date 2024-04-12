import {useState} from "react";


export default function () {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div>
            <h1>react use state</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>increment
            </button>
            <br/>
            state count value is : {count}
            <br/>

            <button onClick={()=>{
                setCount2((count) => {
                    return count + 1
                })
            }}>
                add variety
            </button>
            <br/>
            count2 : {count2}
            <br/>

        </div>
    )

}