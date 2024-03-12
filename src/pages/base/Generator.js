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

function* returnBeforeYield(){
    yield 1
    yield 4
    yield 6
    return 9
    yield 8
}

function testReturnBeforeYield() {
    const result = [...returnBeforeYield()]
    console.log('return before yield result', result)
}

function * gen1() {
    yield 11
    yield 22
    yield 33
    yield 44
}

function * gen2() {
    yield 111
    yield 222
    yield 333
    yield 444
    yield 555
    return 666
}

function * genColl(c1, c2) {
    yield * c1
    yield * c2
}

function testGenColl() {

    const c1 = gen1()
    const c2 = gen2()

    for (let v of genColl(c1, c2)) {
        console.log('test gen coll : ',v)
    }

}

export default function App(){


    testHelloGenerator()
    testF()
    testReturnBeforeYield()
    testGenColl()

    return (

        <div>
            Generator App
        </div>

    )

}