function testCustomIteratorV2() {

    const mi = {
        [Symbol.iterator]: function* () {
            yield 1
            yield 3
            yield 5
        }
    }
    console.log([...mi])
}

function testCustomIteratorV1() {

    const io = {
        [Symbol.iterator]() {
            let range = 10
            return {
                next: function () {
                    if (range > 0) {
                        return {value: range--, done: false}
                    } else {
                        return {value: range, done: true}
                    }
                },

                return() {
                    console.log('io return')
                    return {done: true}
                }
            }
        }
    }

    for (let v of io) {
        if (v > 4) {
            break
        }
        console.log(v)
    }

    console.log([...io])
    console.log([...io])

}

export default function App() {

    testCustomIteratorV1()
    testCustomIteratorV2()

    return (
        <div>
            Iterator App
        </div>
    )

}