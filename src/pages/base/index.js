import {Outlet, useNavigate} from "react-router"
import {Link} from "react-router-dom";

export default function App(){

    // testExpand()
    // testObjectAttr()
    // testSet()

    return (
        <div>
            <div style={{
                height: '100%',
                backgroundColor: "#eeeeee",
                float: 'left',
                marginLeft: "10px"
            }}>
                {/*<button onClick={gotoRedux}>redux</button>*/}
                <Link to={'/base/normal'}>normal</Link><br/>
                <Link to={'/base/iterator'}>iterator</Link><br/>
                <Link to={'/base/generator'}>generator</Link><br/>
            </div>
            <div style={{
                float: 'left',
                marginLeft: "10px"
            }}>
                <Outlet/>
            </div>
        </div>
    )

}