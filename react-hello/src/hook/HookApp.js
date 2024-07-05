import useRequest from './loginHook'
import {apiHello, apiQinghua} from '../util/request'
import {useRef} from "react";


export default function App() {

    const apiReq = useRequest((page, pageSize) => apiQinghua({type: 1, page, pageSize}),)
    // const apiNoPageReq = useRequest(() => apiQinghua({type: 0}),)

    console.log('apiReq  ', apiReq)

    return (<>
        <div>
            <span style={{maxWidth: 200}}>api request content is : {apiReq.data}</span>
            <br/>
            <button onClick={apiReq.refresh}>refresh api request</button>
            <br/>
            <button onClick={() => {
                apiReq.setPage(apiReq.page + 1)
            }}>change page
            </button>
            <br/>
            <button onClick={() => {
                apiReq.setPageSize(apiReq.pageSize + 10)
            }}>change pageSize
            </button>
            <br/>
            <button onClick={() => {
                apiReq.refresh()
            }}>reset
            </button>
            <br/>
        </div>
    </>)
}