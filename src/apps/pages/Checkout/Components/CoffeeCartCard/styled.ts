import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`
export const CoffeeCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  width: 15.938rem;
  height: 4rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 10.688rem;
  height: 2rem;
`

export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  padding: 0 0.5rem;
  height: 2rem;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`
