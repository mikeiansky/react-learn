import SimpleRedux from './SimpleRedux'
import SimpleReduxV2 from './SimpleReduxV2'
import ToolRedux from './ToolRedux'
import ToolReduxV2 from './ToolReduxV2'
import CustomSimpleRedux from './CustomSimpleRedux'
import CustomToolRedux from './CustomToolRedux'
import ReactReduxApp, {store} from './ReactReduxApp'
import {Provider} from 'react-redux'
import ReactReduxV2 from './ReactReduxV2'
import ReduxSagaV2 from "./ReduxSagaV2"
import SimpleReduxV3 from './SimpleReduxV3'
import ToolReduxV3 from './ToolReduxV3'
import ReactReduxV3 from './ReactReduxV3'
import ReduxSagaV3 from "./ReduxSagaV3"
import ReduxSagaV4 from "./ReduxSagaV4"

function ReduxAppV1() {
    return (
        <>
            <SimpleRedux/>
            <ToolRedux/>
            <CustomSimpleRedux/>
            <CustomToolRedux/>
            <Provider store={store}>
                <ReactReduxApp/>
            </Provider>
            <SimpleReduxV2/>
            <ToolReduxV2/>
            <ReactReduxV2/>
            <ReduxSagaV2/>
        </>
    )
}

function ReduxAppV3() {
    return (
        <>
            <SimpleReduxV3/>
            <ToolReduxV3/>
            <ReactReduxV3/>
            <ReduxSagaV3/>
            <ReduxSagaV4/>
        </>
    )
}

export default function App() {
    return (
        <>
            {/*<ReduxAppV1/>*/}
            <ReduxAppV3/>
        </>
    )
}