import useRequest from './loginHook'
import {useState} from "react";
import {apiHello, apiQinghua} from '../util/request'


export default function App() {
    const {code, data, error, action} = useRequest(apiQinghua)
    console.log('app code', code, 'data', data, 'error', error)
    return (
        <>
            <div>
                Hook content is : {data}
                <br/>
                <button onClick={action}>refresh</button>
                <br/>
                error : {error}
            </div>
        </>
    )
}