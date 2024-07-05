import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate()

    const goHome = ()=> {
        navigate('/home')
    }

    return <div>
        This is Header ...

        <div>

            <button onClick={goHome}>go home</button><br />
            <button>go about</button><br />
            <button>go forward</button><br />
            <button>go back</button><br />

        </div>

    </div>

}



