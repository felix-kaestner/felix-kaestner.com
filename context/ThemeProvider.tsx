import {useReducer, useEffect, useCallback, Reducer, PropsWithChildren} from 'react'
import useMediaQuery from '~/hooks/useMediaQuery'
import ThemeContext, {IThemeContext} from './ThemeContext'

type IReducerState = Omit<IThemeContext, 'setColor'>

type IActionMap = {[K in keyof IReducerState]: {type: K; payload: IReducerState[K]}}

type IThemeAction = IActionMap extends {[s: string]: infer P} ? P : never

type IReducer = Reducer<IReducerState, IThemeAction>

function init(): IReducerState {
  const prefersDark =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window?.matchMedia('(prefers-color-scheme: dark)').matches
      : false
  return {color: prefersDark ? 'dark' : 'light'}
}

function ThemeProvider({children}: PropsWithChildren<any>): JSX.Element {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  const [state, dispatch] = useReducer<IReducer, undefined>(
    (state: IReducerState, action: IThemeAction) => {
      switch (action.type) {
        case 'color':
          window.document.body.classList.remove(state.color)
          window.document.body.classList.add(action.payload)
          return {...state, color: action.payload}
        default:
          throw new Error()
      }
    },
    undefined,
    init
  )

  const setColor = useCallback(
    (color: 'light' | 'dark') => {
      dispatch({type: 'color', payload: color})
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch({type: 'color', payload: prefersDark ? 'dark' : 'light'})
  }, [prefersDark, dispatch])

  return <ThemeContext.Provider value={{...state, setColor}}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
