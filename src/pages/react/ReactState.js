import {useState} from "react";
import { css } from '@emotion/react';

export default function () {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const c2_css = css`
        font-size: 25px;
        color: red;
    `;

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

            <button onClick={() => {
                setCount2((count) => {
                    return count + 1
                })
            }}>
                add variety
            </button>
            <br/>
            <div >
                count2 : {count2}
            </div>
            <br/>

        </div>
    )

}