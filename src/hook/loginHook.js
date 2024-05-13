import {useEffect, useState} from "react";


export default function useRequest(api, ...depend) {
    const [code, setCode] = useState(0)
    const [data, setData] = useState()
    const [error, setError] = useState()

    const action = async () => {
        try {
            const jsonResp = await api()
            const resp = await jsonResp.json()
            setCode(resp.code)
            setData(resp.content)
            setError()
        } catch (err) {
            console.log('af error', err)
            setError(err)
        }
    }

    useEffect(() => {
        // action()
        action()
    }, [...depend]);

    return {
        code,
        data,
        error,
        action
    }

}