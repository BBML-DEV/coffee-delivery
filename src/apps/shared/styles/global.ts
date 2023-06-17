import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fonts.regular};
    }
    
    button {
        border: none;
    }

    a {
        text-decoration: none;
    }
`
