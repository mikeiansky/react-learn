import {Outlet, useNavigate} from "react-router"
import {Link} from "react-router-dom";

export default function App(){

    const navigate = useNavigate()

    const gotoAbout = ()=>{
        navigate('/about')
    }

    const gotoLogin = ()=>{
        navigate('/login/458')
    }

    const gotoRedux = ()=>{
        navigate('/redux')
    }

    return (
        <>
            <div>
                <div style={{
                    width: '20%',
                    height: '100%',
                    backgroundColor: "#dddddd",
                    float: 'left'
                }}>
                    <button onClick={gotoAbout}>about</button>
                    <br/>
                    {/*<button onClick={gotoRedux}>redux</button>*/}
                    <Link to={'/redux'}>redux-raw</Link><br/>
                    <Link to={'/saga'}>redux-saga</Link><br/>
                    <Link to={'/base'}>base</Link><br/>
                    <Link to={'/promise'}>promise</Link><br/>
                    <Link to={'/react'}>react</Link>
                    <br/>
                    <button onClick={gotoLogin}>login</button>
                </div>
                <div  style={{
                    float: 'left',
                    marginLeft: "20px"
                }}>
                    <Outlet/>
                </div>
            </div>
        </>
    )

}