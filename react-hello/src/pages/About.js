import {useParams} from 'react-router'
import {useSearchParams} from 'react-router-dom'

export default function () {

    const [searchParams, setSearchParams] = useSearchParams()
    const params = useParams()

    console.log('search params', searchParams)
    console.log('params', params)

    const name = searchParams.get('name')
    const age = searchParams.get('age')

    return (
        <>
            <div>
                This is about page <br/>
                name: {name} <br/>
                age: {age} <br/>
            </div>
        </>
    )

}