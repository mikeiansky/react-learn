// 这里是生成器

function * helloGenerator() {

    yield 'hello'
    yield 'world'


    return 'end'

}

function * f() {
    console.log('f execute')
}

function testF(){
    const fg = f()
    console.log('fg value', fg)
    setTimeout(()=>{
        fg.next()
    }, 2000)
}


function testHelloGenerator() {

    const hg = helloGenerator()
    console.log('hg value is ', hg)
    console.log(hg.next())
    console.log(hg.next())
    console.log(hg.next())
    console.log(hg.next())

}

export default function App(){


    testHelloGenerator()
    testF()

    return (

        <div>
            Generator App
        </div>

    )

}