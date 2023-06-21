import styled from 'styled-components'

export const InputStyled = styled.input`
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['yellow-dark']};
  }

  color: ${({ theme }) => theme.colors['base-label']};
`
