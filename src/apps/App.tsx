import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './shared/styles/theme/defaultTheme'
import { GlobalStyle } from './shared/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './shared/router'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
