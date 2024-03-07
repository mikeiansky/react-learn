import SimpleRedux from './SimpleRedux'
import ToolRedux from './ToolRedux'
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
        </>
    )
}