function testAttr() {

    const age_attr = 'age'

    const obj = {
        name: 'ciwei',
        [age_attr]: 32
    }

    console.log(obj.name, obj.age, obj.age_attr, obj[age_attr])

}


function testFunction() {

    let log = (function () {
        console.log('temp function execute')
        return 'temp'
    }())

    console.log('test function log value is ', log)

    let rf = (function () {
        console.log('rf execute ... ')
        return function () {
            console.log('rf return function execute ... ')
            return 'change by re'
        }
    }())()

    console.log('rf value is ', rf)

}

function testLambdaReturn() {
    console.log('testLambdaReturn start ...')
    const world = 'hello'
    const lf = ({tag}) => ({tag})

    const v = lf({tag: world})

    console.log('labmda v is ', v)
    console.log('labmda v.tag is ', v.tag)
    console.log('testLambdaReturn end ...')

}

function connect(func) {
    console.log('connect start ...')
    const fv = func({tag: 'good'})
    console.log('connect fv value is ', fv)
    console.log('connect complete ...')
    return () => fv
}

function testConnect() {
    console.log('testConnect start ...')

    const cv = connect(({tag}) => ({tag}))()
    console.log('testConnect cv is ', cv)

    console.log('testConnect complete ...')
}

function twoObjArgFunc({one}, {two, three}) {
    console.log('one', one)
    console.log('two', two)
    console.log('three', three)
}

function testObjArg() {
    console.log('testObjArg start ...')

    twoObjArgFunc({one: 'first'}, {two: 'second', three: 'thrid'})

    console.log('testObjArg complete ...')
}

function PropsApp(props) {

    console.log('props app value is', props)

    return <div>
        This is props app
    </div>
}

function testTopLeveObject(){
    console.log('window is ', window)
    console.log('global is ', global)
}

function testDestruct(){

    let {toString: s} = 123
    console.log(s)

    const v = 391
    console.log(v.toString())

}

function move({x = 3, y = 7} = {}){
    console.log('move x:', x, ', y:', y)
}

function testTemplateString(){
    const hold = 'ian'

    const content = `
        hello world
        start 'str' value : ${hold} \n
        end complete
    `

    console.log(String.fromCharCode(0x20BB7))

    console.log('content value is ', content)
}

function testProperty(){

    const ka = 'age'

    const obj = {
        ['hello'] : 'world',
        [ka] : 34
    }

    console.log(obj)
    console.log(obj.hello)
    console.log(obj.age)
    console.log(obj['hello'])
    console.log(obj['age'])
    // Symbol.hasInstance
    // Symbol.iterator
    // Symbol.split

}

function testMultiThenPromise(){

    new Promise((rev, rej) =>{
        rev('hello')
    }).then(r1 => {
        console.log('r1', r1)
        return 'world'
    }).then(r2 => {
        console.log('r2', r2)
        return new Promise((rev, rej)=>{
            // setTimeout(rev, 2000, 'help')
            setTimeout(rej, 2000, 'out-error')
        })
    }).then(r3 => {
        console.log('r3', r3)
        return new Promise((rev, rej) => {
            setTimeout(rev, 1000, 'concat : ' + r3)
        })
    }).then(
        r4 => {
            console.log('r4', r4)
        // () => {
        // console.log('r4 complete')
    }).catch(err => {
        console.log('catch error', err)
    })

    console.log('test multi then promise complete ...')

}

export default function App() {

    // testAttr()
    // testFunction()
    // testLambdaReturn()
    // testConnect()
    // testObjArg()
    // testTopLeveObject()
    // testDestruct()
    // move({x:5, y : 9})
    // move()

    // testTemplateString()
    // testProperty()


    const person = {
        name: 'ciwei',
        // msg: 'ciwei-00',
        age : 45
    }

    // console.log('typeof person', typeof person)

    testMultiThenPromise()

    return (
        <div>
            Normal
            <PropsApp
                msg={'start'}
                port={80}
                {...person}
            />
        </div>
    )

}