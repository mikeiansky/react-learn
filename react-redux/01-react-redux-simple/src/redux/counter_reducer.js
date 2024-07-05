
const initState = 0
export default function CountReducer(prestate = initState, action) {

    const { type, data } = action

    console.log('count reducer , type:', type, 'data:', data, prestate)
    switch (type) {
        case 'increment':
            return prestate + data
        case 'decrement':
            return prestate - data
        default:
            return prestate
    }

    return prestate

}