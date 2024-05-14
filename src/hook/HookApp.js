import useRequest from './loginHook'
import {apiHello, apiQinghua} from '../util/request'


export default function App() {
    const apiReq = useRequest(() => apiQinghua({type:0, page: 1, pageSize: 10}))

    console.log('result ', apiReq.res?.code, apiReq.res?.content, apiReq.version)

    return (
        <>
            <div>
                qinghua1 content is : {apiReq.data}
                <br/>
                <button onClick={apiReq.refresh}>refresh qinghua 1</button>
                <br/>
                <br/>
                <div>==============================</div>
                {/*qinghua2 content is : {qinghua2.data}*/}
                {/*<br/>*/}
                {/*<button onClick={qinghua2.refresh}>refresh qinghua 2</button>*/}
                {/*<br/>*/}
                {/*<div>==============================</div>*/}
            </div>
        </>
    )
}