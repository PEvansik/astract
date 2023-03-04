import {useState, useEffect} from 'react'


function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize(prev => {
                return {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        });
        }

        // gets called onMount
        // handleResize();

        // gets called on resize
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
        
    }, []);

    return windowSize
}

export default useWindowResize