import {useNavigate, useParams} from 'react-router'

export default function (){

    const params = useParams()

    const navigate = useNavigate()

    const {id} = params

    console.log('login page params', params, 'id', id)

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