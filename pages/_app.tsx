import type {AppProps} from 'next/app'
import '~/assets/css/fonts.css'
import '~/assets/css/main.css'
import ThemeProvider from '~/context/ThemeProvider'

function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
