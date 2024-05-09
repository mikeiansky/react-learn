import {useState} from "react";

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

    // console.log('props app value is', props)

    return <div>
        This is props app
    </div>
}

function testTopLeveObject() {
    console.log('window is ', window)
    console.log('global is ', global)
}

function testDestruct() {

    let {toString: s} = 123
    console.log(s)

    const v = 391
    console.log(v.toString())

}

function move({x = 3, y = 7} = {}) {
    console.log('move x:', x, ', y:', y)
}

function testTemplateString() {
    const hold = 'ian'

    const content = `
        hello world
        start 'str' value : ${hold} \n
        end complete
    `

    console.log(String.fromCharCode(0x20BB7))

    console.log('content value is ', content)
}

function testProperty() {

    const ka = 'age'

    const obj = {
        ['hello']: 'world',
        [ka]: 34
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

function testMultiThenPromise() {

    new Promise((rev, rej) => {
        rev('hello')
    }).then(r1 => {
        console.log('r1', r1)
        return 'world'
    }).then(r2 => {
        console.log('r2', r2)
        return new Promise((rev, rej) => {
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

function restFunc(...args) {
    console.log('args', args)
    for (let v of args) {
        console.log(v)
    }
}

function testFunctionRest() {

    restFunc(1, 4, 5, 9)
    console.log('split ==========> ')
    restFunc(['hello', 'world'])

}

async function timeout(ms) {
    return new Promise((res, rev) => {
        setTimeout(res, ms, 'hello')
    })
}

async function getTitle() {
    return new Promise((res, rev) => {
        res('mike')
    })
}

async function testAsync() {
    console.log('test async start')
    await timeout(1000)
    getTitle().then(console.log)
    // await const title = yield getTitle()
    // console.log('title ', title)
    console.log('test async complete')
}

function testSaveLocalStorage() {
    console.log("save local storage start 111")

    console.log('save local storage', localStorage)
    // localStorage.setItem('my_name', 'ian-001')

    // 保存数据到 localStorage
    localStorage.setItem('my_name_02', 'ian-002');

// 获取 localStorage 中的数据
//     const savedName = localStorage.getItem('my_name');

// 检查是否成功获取数据并输出
//     if (savedName) {
//         console.log('成功获取到数据：', savedName);
//     } else {
//         console.log('未找到保存的数据');
//     }


    console.log("save local storage end")
}

function testLoadLocalStorage() {
    console.log("load local storage start")
    console.log('load local storage', localStorage)
    console.log('find_data ', localStorage.getItem('my_name_02'))
    console.log("load local storage complete")
}

function testLocalStorage() {
    testSaveLocalStorage()
    testLoadLocalStorage()
}

function testSaveDB() {
    // const request = indexedDB.open('company', '1.0')
    // console.log('dbdbdbdb',request)
    // db.transaction(function (tx){
    //     tx.executeSql('create table if not exists company_t (id unique, name)')
    //     tx.executeSql('insert into company_t values (1, "ciwei")')
    //     tx.executeSql('insert into company_t values (2, "ian")')
    // })
}

function testLoadDB() {

}

function testDB() {
    testSaveDB()
    testLoadDB()
}

function sendRequest(change) {
    var xhr = new XMLHttpRequest();
    const url = 'https://api.vvhan.com/api/moyu?type=json'
    // const url= 'https://www.baidu.com'
    xhr.onreadystatechange = function () {
        // 通信成功时，状态值为4
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                change && change(xhr.responseText)
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.open('GET', url, true);
    xhr.send(null);
}

function testPayload({payload}){
    console.log('payload_v1', payload)
}

function testPayloadV2(props){
    console.log('payload_v2', props)
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
        age: 45
    }

    // console.log('typeof person', typeof person)
    // testMultiThenPromise()
    // testFunctionRest()
    // testAsync()

    // testLocalStorage()
    testDB()
    const [content, setContent] = useState(null)

    testPayload({payload:'different'})
    const data = {payload: 'good'}
    testPayload(data)

    testPayloadV2({payload: 'vvvv2'})
    testPayloadV2(data)

    return (
        <div>
            Normal
            <PropsApp
                msg={'start'}
                port={80}
                {...person}
            />
            <button onClick={() => {
                sendRequest((msg) => {
                    setContent(msg)
                })
            }}>send request
            </button>
                content: {content}
        </div>
    )

}