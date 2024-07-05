import {createStore} from 'redux'
import countReducer from './counter_reducer'


const store = createStore(countReducer)


export default store