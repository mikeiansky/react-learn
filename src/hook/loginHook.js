import {useEffect, useState} from "react";

export default function useRequest(api, ...depend) {
    const [code, setCode] = useState(0);
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [version, setVersion] = useState(0);
    useEffect(() => {
        let ignore = false;
        setLoading(true)
        api().then(response => {
            return response.json()
        }).then(data => {
            if (ignore) return
            setCode(data.code);
            setData(data.content);
            setError(null);
            setLoading(false);
        }).catch(error => {
            setError(error)
            setLoading(false);
        }).finally(() => {
            // setLoading(false);
        })
        return () => {
            ignore = true
        };
    }, [...depend, version]);

    const refresh = () => {
        setVersion(version + 1)
    }

    return {
        code,
        data,
        error,
        loading,
        version,
        refresh
    };
}
