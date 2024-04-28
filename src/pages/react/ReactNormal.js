import {useEffect, useState} from "react";


function Hello(props) {

    console.log('hello props', props)

    return (
        <>
            <h1>hello msg: {props.msg}</h1>
            <div>
                {props.children}
            </div>
        </>
    )

}


export default function App() {

    const [memberList, setMemberList] = useState([1])
    console.log('memberList', memberList)

    useEffect(()=>{
        let data = {
            list : [11,22,33,44]
        }
        data.list = null
        console.log('use effect running ... ')
        setMemberList(data?.list || [])
        console.log('use effect running member list', memberList)
    },[])

    return (
        <div>
            <h1>React Normal Page</h1>
            <Hello msg={'good'} age={28}>
                hello start<br/>
                <p>hello project</p>
                hello end<br/>
            </Hello>
        </div>
    )

}