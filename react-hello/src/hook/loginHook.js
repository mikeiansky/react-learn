import {useEffect, useRef, useState} from "react";

export default function useRequest(api, {
    useLoading = false,
    page = 1,
    pageSize = 10,
    depends = [],
} = {}) {
    const pageRef = useRef(page)
    const pageSizeRef = useRef(pageSize)
    const [code, setCode] = useState(0);
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [version, setVersion] = useState(0);
    const [__depends, setDepends] = useState(depends)
    let latestRequestId = 0

    const action = () => {
        const currentRequestId = Date.now();
        latestRequestId = currentRequestId
        let ignore = false;
        if (useLoading) {
            setLoading(true);
        }
        api(pageRef.current, pageSizeRef.current).then(response => {
            return response.json()
        }).then(data => {
            if (currentRequestId !== latestRequestId) {
                return;
            }
            setCode(data.code);
            setData(data.content);
            setError(null);
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
        pageRef.current = page
        pageSizeRef.current = pageSize
        action();
    }

    const setPage = (page) => {
        pageRef.current = page
        action()
    }

    const setPageSize = (pageSize) => {
        pageSizeRef.current = pageSize
        action()
    }

    const clearError = () => {
        setError()
    }

    useEffect(() => {
        refresh()
    }, [page, pageSize, useLoading, ...depends, version]);

    return {
        code,
        data,
        error,
        loading,
        version,
        setVersion,
        refresh,
        setDepends,
        page: pageRef.current,
        setPage,
        pageSize: pageSizeRef.current,
        setPageSize,
        clearError
    };
}
