import {useNavigate} from 'react-router'

export default function (){

    const navigate = useNavigate()

    return (
        <>
            <p>This is login page</p>
            <button onClick={()=>
                navigate("/about", {replace: true})
                // navigate("/about")
            }> about </button>
        </>
    )

}