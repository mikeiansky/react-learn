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

export default function App() {

    testAttr()
    testFunction()
    testLambdaReturn()
    testConnect()
    testObjArg()

    const person = {
        name: 'ciwei',
        // msg: 'ciwei-00',
        age : 45
    }

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