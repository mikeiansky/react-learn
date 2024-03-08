import {Outlet, useNavigate} from "react-router"

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
                    <button onClick={gotoRedux}>redux</button>
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