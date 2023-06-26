import styled from 'styled-components'

export const CheckOutContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin-top: 2.5rem;
`

export const DefaultCompleteOrderSection = styled.section`
  width: 100%;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
`
