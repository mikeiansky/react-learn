


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