import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface buttonProps {
  variant: 'purple' | 'yellow'
}

export const ButtonHeader = styled.button<buttonProps>`
  display: flex;
  min-width: 2.3rem;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  height: 2.375rem;
  border-radius: 6px;
  gap: 4px;
  font-size: ${({ theme }) => theme.textSizes['components-button-s']};

  ${({ variant, theme }) => css`
    background-color: ${theme.colors[`${variant}-light`]};
    color: ${theme.colors[`${variant}-dark`]};
  `}

  ${({ theme, variant }) =>
    variant === 'purple' &&
    css`
      background-color: ${theme.colors[`${variant}-light`]};
      color: ${theme.colors[`${variant}-dark`]};

      svg {
        color: ${theme.colors[`${variant}`]};
      }
    `}
`
