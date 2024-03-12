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

export default function App() {

    testAttr()
    testFunction()

    return (
        <div>
            Normal
        </div>
    )

}