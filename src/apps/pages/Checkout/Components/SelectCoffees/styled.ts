import styled from 'styled-components'
import { DefaultCompleteOrderSection } from '../../styled'

export const SelectCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;
`
export const SectionSelectCoffeesCard = styled(DefaultCompleteOrderSection)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const SectionPriceCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`

export const Prices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const BuyButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
