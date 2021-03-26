import {useCallback} from 'react'
import MoonIcon from '~/assets/icons/moon.svg'
import SunIcon from '~/assets/icons/sun.svg'
import {useTheme} from '~/context/ThemeContext'

function ThemeToggle(): JSX.Element {
  const {color, setColor} = useTheme()
  const onClick = useCallback(() => setColor(color === 'dark' ? 'light' : 'dark'), [color])
  return (
    <div className="theme-toggle">
      <div onClick={onClick}>{color === 'dark' ? <SunIcon /> : <MoonIcon />}</div>
      <style jsx>{`
        .theme-toggle {
          position: absolute;
          top: 7.5%;
          right: 7.5%;
          cursor: pointer;
          animation: 1s appear;
          transition: opacity 150ms ease;
        }

        @media only screen and (max-width: 768px) {
          .theme-toggle {
            top: 5%;
          }
        }

        @keyframes appear {
          0% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ThemeToggle
