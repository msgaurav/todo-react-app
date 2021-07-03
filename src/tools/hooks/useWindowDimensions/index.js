import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: null,
  })

  const handleResize = () => {
    setWindowDimensions({
      windowWidth: window.innerWidth,
    })
  }

  useEffect(() => {
    // Run this once on first mount
    setWindowDimensions({
      windowWidth: window.innerWidth,
    })

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}
