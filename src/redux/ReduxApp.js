import SimpleRedux from './SimpleRedux'
import SimpleReduxV2 from './SimpleReduxV2'
import ToolRedux from './ToolRedux'
import ToolReduxV2 from './ToolReduxV2'
import CustomSimpleRedux from './CustomSimpleRedux'
import CustomToolRedux from './CustomToolRedux'
import ReactReduxApp, {store} from './ReactReduxApp'
import {Provider} from 'react-redux'

export default function App() {
    return (
        <>
            <SimpleRedux/>
            <ToolRedux/>
            <CustomSimpleRedux/>
            <CustomToolRedux/>
            <Provider store={store}>
                <ReactReduxApp/>
            </Provider>
            <SimpleReduxV2 />
            <ToolReduxV2 />
        </>
    )
}