import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  > p {
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

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
export const InputStyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background-color: ${({ theme }) => theme.colors['base-input']};
`
export const RightText = styled.p`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors[`base-label`]};
  font-size: ${({ theme }) => theme.textSizes['text-regular-small']};
`
