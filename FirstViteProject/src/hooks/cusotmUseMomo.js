import { useRef, useState } from "react";

export default function cusotmUseMomo(cab, dep) {

    const memoizedValue = useRef(null)
    const memoizedDep = useRef(null)

    if (!memoizedValue.current || (JSON.stringify(memoizedDep.current) !== JSON.stringify(dep))) {
        memoizedValue.current = cab();
        memoizedDep.current = dep;
    }

    useState(() => {
        return () => {
            memoizedValue.current = null
            memoizedDep.current = null
        }
    })

    return memoizedValue.current
}
