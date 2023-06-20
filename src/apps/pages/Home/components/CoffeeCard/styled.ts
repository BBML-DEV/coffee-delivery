import styled from 'styled-components'
import {
  RegularText,
  TittleText,
} from '../../../../shared/components/Typography/styled'

export const CardContainer = styled.div`
  width: 100%;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0px;
  background-color: ${({ theme }) => theme.colors['base-card']};

  img {
    margin-top: -2.5rem;
  }
`

export const TagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
`

export const Tag = styled(RegularText)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;
  border-radius: 100px;
  width: 5.063rem;
  font-size: 0.625rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['yellow-dark']};
  background-color: ${({ theme }) => theme.colors['yellow-light']};
`

export const TitleCard = styled(TittleText)`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

export const DescriptionCard = styled(RegularText)`
  margin-bottom: 2.063rem;
  text-align: center;
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 1.438rem;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.2rem;
`

export const BuyButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  gap: 0.5rem;

  > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['purple-dark']};
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }

    svg {
      width: 22px;
      height: 22px;
    }
  }
`
