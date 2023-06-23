import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './shared/styles/theme/defaultTheme'
import { GlobalStyle } from './shared/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './shared/router'
import { CoffeesProvider } from './shared/context'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CoffeesProvider>
          <BrowserRouter>
            <Router />
            <GlobalStyle />
          </BrowserRouter>
        </CoffeesProvider>
      </ThemeProvider>
    </>
  )
}

export default App
