import {useEffect, useState} from "react";


export default function useRequest(apiFunc) {

    const [res, setRes] = useState()

    const ua = async () => {
        try {
            const af = await apiFunc()
            console.log('af result', af)
            setRes(af)
        } catch (err) {
            console.log('af error', err)
        }

    }

    useEffect(() => {
        ua()
    }, []);

    const refresh = ua

    console.log('use request res ', res)

    const update = (res) => {
        setRes(res)
    }

    return {
        res,
        refresh
    }

}