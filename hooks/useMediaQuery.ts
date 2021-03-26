import {useState, useEffect} from 'react'
import {useIsSSR} from './useIsSSR'

function useMediaQuery(query: string): boolean {
  const supportsMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'

  const [matches, setMatches] = useState<boolean>(() =>
    supportsMatchMedia ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    if (!supportsMatchMedia) return
    const media = window?.matchMedia(query)
    setMatches(media.matches)
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [supportsMatchMedia, query])

  // If in SSR, the media query should never match. Once the page hydrates,
  // this will update and the real value will be returned.
  const isSSR = useIsSSR()

  return isSSR ? false : matches
}

export default useMediaQuery
