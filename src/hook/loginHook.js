import {useEffect, useState} from "react";

export default function useRequest(api, {useLoading = false, depends = []} = {}) {
    const [code, setCode] = useState(0);
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [version, setVersion] = useState(0);
    const [res, setRes] = useState();
    let latestRequestId = 0

    const action = () => {
        const currentRequestId = Date.now();
        latestRequestId = currentRequestId
        let ignore = false;
        if (useLoading) {
            setLoading(true);
        }
        api().then(response => {
            return response.json()
        }).then(data => {
            if (currentRequestId !== latestRequestId) {
                return;
            }
            setCode(data.code);
            setData(data.content);
            setError(null);
            setRes(data);
        }).catch(error => {
            if (currentRequestId !== latestRequestId) {
                return;
            }
            setError(error);
        }).finally(() => {
            if (currentRequestId !== latestRequestId) {
                return;
            }
            if (useLoading) {
                setLoading(false);
            }
        });
    }

    const refresh = () => {
        action();
    }

    useEffect(() => {
        refresh()
    }, [...depends, version]);

    return {
        code,
        data,
        error,
        loading,
        version,
        refresh,
        res,
    };
}
