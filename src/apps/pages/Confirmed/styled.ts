import styled from 'styled-components'

export const ConfirmedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;
  gap: 2.5rem;
`
interface TittleColor {
  variant: 'yellow-dark'
}

export const OrderContainer = styled.div<TittleColor>`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme, variant }) => theme.colors[variant]};
    padding-bottom: 0.25rem;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  margin-top: 2.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px;
    z-index: -1;
    background: linear-gradient(
      90deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 100%
    );
  }
`
