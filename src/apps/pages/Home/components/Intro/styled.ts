import styled from 'styled-components'
import introBackground from '../../../../../assets/intro-background.png'
import { rgba } from 'polished'
import {
  RegularText,
  TittleText,
} from '../../../../shared/components/Typography/styled'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackground}) no-repeat center, 
    linear-gradient(
      0deg,
      ${theme.colors.white} 0%,
      ${rgba(theme.colors.background, 0.2)} 50%,
      ${theme.colors.background} 100%
   )
  `};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IntroContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
`

export const IntroTittle = styled(TittleText)`
  margin-bottom: 1rem;
`
export const IntroText = styled(RegularText)``

export const Badges = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 4.125rem;
`
