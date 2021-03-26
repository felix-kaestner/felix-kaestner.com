import {useState, useLayoutEffect} from 'react'

/**
 * Returns whether the component is currently being server side rendered or
 * hydrated on the client. Can be used to delay browser-specific rendering
 * until after hydration.
 */
export function useIsSSR(): boolean {
  const [isSSR, setIsSSR] = useState(typeof window !== 'undefined')

  // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.
  if (typeof window !== 'undefined') {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    useLayoutEffect(() => {
      setIsSSR(false)
    }, [])
  }

  return isSSR
}
