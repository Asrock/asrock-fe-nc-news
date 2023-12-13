import { useRef, useEffect } from "react";

export function useUpdateEffect(fn, inputs) {
    const isMountingRef = useRef(true);

    useEffect(() => {
        if (!isMountingRef.current)
            return fn();

        isMountingRef.current = false;
    }, inputs);
}