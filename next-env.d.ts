/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  import * as React from 'react'

  // prettier-ignore
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string}>

  const src: string
  export default src
}