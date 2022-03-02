//import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function useWindowSize() {
    // if(typeof window !== "undefined") {
    //     return { width: 1200, height: 800 };
    // }
    const isSSR = typeof window !== "undefined";
    const [windowSize, setWindowSize] = useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight,
    });

    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(() => {
        window.addEventListener("resize", changeWindowSize);

    return () => {
        window.removeEventListener("resize", changeWindowSize);
    };
}, []);

    return windowSize;
}

