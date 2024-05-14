import {useEffect, useState} from "react";

export default function useRequest(api, {useLoading = false, depends = []} = {}) {
    const [code, setCode] = useState(0);
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [version, setVersion] = useState(0);
    const [res, setRes] = useState()

    const quickRefresh = () => {
        let ignore = false;
        if (useLoading) {
            setLoading(true)
        }
        api().then(response => {
            return response.json()
        }).then(data => {
            if (ignore) return
            setCode(data.code);
            setData(data.content);
            setError(null);
            setRes(data)
        }).catch(error => {
            if (ignore) return
            setError(error)
        }).finally(() => {
            if (ignore) return
            if (useLoading) {
                setLoading(false);
            }
        })
    }

    useEffect(() => {
        quickRefresh()
    }, [...depends, version]);

    const refresh = () => {
        setVersion(version + 1)
    }

    return {
        code,
        data,
        error,
        loading,
        version,
        refresh,
        quickRefresh,
        res,
    };
}
