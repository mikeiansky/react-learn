import useRequest from './loginHook'
import {apiHello, apiQinghua} from '../util/request'


export default function App() {
    const qinghau1 = useRequest(()=> apiQinghua())

    console.log('result ', qinghau1.res?.code, qinghau1.res?.data)

    return (
        <>
            <div>
                qinghua1 content is : {qinghau1.data}
                <br/>
                <button onClick={qinghau1.refresh}>refresh qinghua 1</button>
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