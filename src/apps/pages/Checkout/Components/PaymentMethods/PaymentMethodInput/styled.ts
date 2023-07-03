import styled from 'styled-components'

export const ButtonPaymentWraper = styled.button`
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
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors['purple-dark']};
    background-color: ${({ theme }) => theme.colors['purple-light']};
  }
`
