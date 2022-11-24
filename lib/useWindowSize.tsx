import { useEffect, useState } from "react";

interface WindowSize {
  screenWidth: number;
  screenHeight: number;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    screenWidth: 0,
    screenHeight: 0,
  })
  
  useEffect(() => {
    function handleWindowSize() {
      setWindowSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      })
    }
    handleWindowSize(); // set the initial window size

    window.addEventListener('resize', handleWindowSize)

    return () => {
      window.removeEventListener('resize', handleWindowSize)
    }
  }, [])

  return windowSize;
}

export default useWindowSize;