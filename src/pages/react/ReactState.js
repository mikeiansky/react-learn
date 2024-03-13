import {useState} from "react";


export default function () {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>react use state</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>increment
            </button>
            <br/>
            state count value is : {count}
        </div>
    )

}