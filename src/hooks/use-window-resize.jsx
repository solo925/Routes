import { useLayoutEffect, useState } from "react";


function useWindowResize() {
    const [windowSize, setWindowLSize] = useState({
        width: 0,
        height: 0,
        
    });

    function handleResize() {
        setWindowLSize({
            width:window.innerWidth,
            height:window.innerHeight,
        })

        
    }
    

    useLayoutEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return ()=>{window.removeEventListener("resize",handleResize)}
    }, []);
    
    return windowSize
}
