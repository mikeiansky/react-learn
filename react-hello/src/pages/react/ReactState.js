import {useState} from "react";
import { css } from '@emotion/react';
import './hello.scss'
// import './hello.css'

export default function () {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <div>
            <h1>react use state</h1>
            <span>
                <button onClick={() => {
                    setCount(count + 1)
                }}>increment
                </button>
            </span>

            <br/>
            state count value is : {count}
            <br/>

            <button onClick={() => {
                setCount2((count) => {
                    return count + 1
                })
            }}>
                add variety
            </button>
            <br/>
            <main className={'hello'}>
                count2 : {count2}
            </main>
            <br/>

        </div>
    )

}