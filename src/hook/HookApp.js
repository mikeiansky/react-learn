import useRequest from './loginHook'

export default function App() {

    let count = 0

    const api = async () => {
        return await new Promise(function (resolve, reject) {
            setTimeout(() => {
                count++
                resolve('hello api' + count)
                // reject('hello api')
            }, 2000)
        })
    }

    const request = useRequest(api)
    console.log('request hook ', request)

    return (
        <>
            <div>
                this is hook app
                <br/>
                <button onClick={request.refresh}>refresh</button>
                <br/>
                request result : {request.res?.toString()}
            </div>
        </>
    )
}