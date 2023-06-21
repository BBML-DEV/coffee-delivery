import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    color: ${({ theme }) => theme.colors['base-title']};
    border: none;

    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 0.875rem;
  cursor: pointer;
  transition: 0.4s;
  background: none;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`
