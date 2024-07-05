function testNormal() {

    const p = Promise.resolve('hello')

    p.then((v) => console.log('normal v1', v))
    p.then((v) => console.log('normal v2', v))

}

function testThenable() {

    console.log('then able start ')
    const then = {

        then(resolve, reject) {
            resolve('then v1')
        }
    }

    const p = Promise.resolve(then)
    p.then(v=>{
        console.log('then v1', v)
    })
    p.then((v1, e1)=>{
        console.log('then v2', v1)
    })

}

function testReject() {
    const p = Promise.reject('error')

    p.then(v=>{
        console.log('reject value', v)
    }, e => {
        console.log('reject error', e)
    })

}

function testResolveReject(){

    const t = {
        then(res, rej){
            // res('hello')
            rej('hello')
        }
    }

    const p = Promise.resolve(t)

    p.catch(e=>{
        console.log('catch', e)
    })

}

export default function App() {

    // testNormal()
    // testThenable()
    // testReject()
    testResolveReject()

    return (
        <>
            <p>This is promise app</p>
        </>
    )
}