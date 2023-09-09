import { useState, useRef, useEffect } from 'react';

export function useLoading<T>(callback:()=>Promise<T|undefined>):{
    IsLoading: boolean,
    IsError: boolean,
    Data?: T|undefined
}{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const data = useRef<T|undefined>();
    const startLoading = useRef(false);
    

    useEffect(()=>{
        if (startLoading.current) return;
        startLoading.current = true;
        callback().then((res)=>{
            if (!res) setError(true);
            if (res) data.current = res;
            setLoading(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return {
        IsLoading: loading,
        IsError: error,
        Data: data.current,
    }
}