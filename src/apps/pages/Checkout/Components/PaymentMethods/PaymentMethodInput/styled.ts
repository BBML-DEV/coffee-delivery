import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['purple-light']};
      border-color: ${theme.colors.purple};

      &:hover {
        background: ${theme.colors['purple-light']};
      }
    `}
  }
`
export const ContentPaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;
  text-transform: uppercase;
  border: 1px solid transparent;
  cursor: pointer;

  p {
    font-size: 12px;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
