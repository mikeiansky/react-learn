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
                    <ul>
                        <li><Link to={'/redux'}>redux-raw</Link></li>
                        <li><Link to={'/saga'}>redux-saga</Link></li>
                        <li><Link to={'/base'}>base</Link></li>
                        <li><Link to={'/promise'}>promise</Link></li>
                        <li><Link to={'/react'}>react</Link></li>
                        <li><Link to={'/style'}>style</Link></li>
                        <li><Link to={'/info'}>info</Link></li>
                        <li><Link to={'/zustand'}>zustand</Link></li>
                        <li><Link to={'/hook'}>hook</Link></li>
                    </ul>
                    {/*<button onClick={gotoRedux}>redux</button>*/}
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