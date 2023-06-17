import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './shared/styles/theme/defaultTheme'
import { GlobalStyle } from './shared/styles/global'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <h1>aaa</h1>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
