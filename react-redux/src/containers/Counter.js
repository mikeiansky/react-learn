import CountUI from '../components/Counter'
import {connect} from 'react-redux'
import { createIncrementAction,createDecrementAction } from '../redux/counter_actions'

function mapStateToProps(state){
	return {count:state}
}

export default connect(
    (state)=>({count:state}),
    (dispatch)=> ({
        increment: data => dispatch(createIncrementAction(data)),
        decrement: data => dispatch(createDecrementAction(data))
    })
)(CountUI)