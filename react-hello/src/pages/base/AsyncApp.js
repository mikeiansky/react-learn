import {combineSlices} from "@reduxjs/toolkit";

function read(msg) {

    return new Promise(function (resolve, reject) {
        resolve('read-' + msg)
    })

}

function * applyPromiseReturnValue() {

    const m1 = yield read('hello')
    console.log('m1 value', m1)
    const m2 = yield read('world')
    console.log('m2 value', m2)
}

function testPromiseReturnValue() {
    console.log('testPromiseReturnValue start ...')

    const ap= applyPromiseReturnValue()
    console.log('ap.next1', ap.next().value)
    console.log('ap.next2', ap.next())
    console.log('ap.next3', ap.next())

    console.log('testPromiseReturnValue complete ...')
}


async function testAsync() {
    console.log('testAsync start ...')
    const m1 = await read('hello')
    const m2 = await read('world')
    console.log('m1', m1)
    console.log('m2', m2)
    console.log('testAsync complete ...')
}

function myTimeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function testTimeout() {
    console.log('testTimeout start ...')

    await myTimeout(2000)

    console.log('testTimeout complete ...')
}

async function normalAsync(){
    return 'normal'
}

async function testNormalAsync(){
    console.log('testNormalAsync start')
    const value = await normalAsync()
    console.log('testNormalAsync value', value)
    console.log('testNormalAsync complete')
    return 'normal async return'
}


export default function App() {

    testPromiseReturnValue()
    testAsync()
    testTimeout()
    testNormalAsync().then(v=> console.log('normal async value is ', v))
    // testTimeout()


    return (
        <>
            Async App
        </>
    )

}