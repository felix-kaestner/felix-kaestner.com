import {createContext, useContext} from 'react'

export interface IThemeContext {
  color: 'light' | 'dark'
  setColor: (color: 'light' | 'dark') => void
}

const ThemeContext = createContext<IThemeContext>({color: 'light', setColor: () => void 0})

export function useTheme(): IThemeContext {
  return useContext(ThemeContext)
}

export default ThemeContext
