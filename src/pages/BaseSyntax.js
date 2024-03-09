
function hello({msg}) {
    console.log('hello', msg)
}

function testExpand(){
    const a1 = [1 ,2 ,3]

    const [...a2] = a1

    const a3 = [...a1];

    const msg = 'world'
    hello({msg})
    console.log(Object.is(hello, hello))

    const mo = {msg}
    console.log(mo.msg)

    console.log(a2)
    console.log(a3)
}

function testSymbol(){

}

function testObjectAttr() {
    const obj = {
        hello: 'world'
    }

    console.log('hello attr', obj.hello, obj['hello'])
}

function testSet() {
    const sc = new Set()

    sc.add(1)
    sc.add(2)
    sc.add(4)
    sc.add(2)
    sc.add(3)
    
    console.log(sc)

}

function testNonameFunction() {
    (
        () => {
            console.log('no name hello')
        }
    )()
}

export default function App(){

    // testExpand()
    // testObjectAttr()
    // testSet()

    testNonameFunction()

    return (
        <div>
            Base Syntax App
        </div>
    )

}