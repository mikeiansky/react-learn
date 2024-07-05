import {Outlet, useNavigate} from "react-router"
import {Link} from "react-router-dom";

export default function App() {


    return (
        <>
            <div style={{
                height: '100%',
                backgroundColor: "#eeeeee",
                float: 'left',
                marginLeft: "10px"
            }}>
                <Link to={'/react/normal'}>react-normal</Link><br/>
                <Link to={'/react/state'}>react-state</Link><br/>
                <Link to={'/react/immer'}>react-immer</Link><br/>
                <Link to={'/react/reducer'}>react-reducer</Link><br/>
                <Link to={'/react/context'}>react-context</Link><br/>
            </div>
            <div style={{
                float: 'left',
                marginLeft: "10px"
            }}>
                <Outlet/>
            </div>
        </>
    )

}