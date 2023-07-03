import { ReactNode } from 'react'
import { IconContainer, InfoContainer } from './styled'

export interface infoProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export const InfoWithIcon = ({ icon, text, iconBg }: infoProps) => {
  return (
    <InfoContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoContainer>
  )
}
