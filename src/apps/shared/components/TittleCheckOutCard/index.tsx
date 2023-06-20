import { ReactNode } from 'react'
import { Icon, TittleCardContainer } from './styled'
import { RegularText } from '../Typography/styled'

interface TittleCheckOutCardProps {
  icon: ReactNode
  tittle: string
  description: string
}

export const TittleCheckOutCard = ({
  icon,
  tittle,
  description,
}: TittleCheckOutCardProps) => {
  return (
    <TittleCardContainer>
      <Icon>{icon}</Icon>

      <div>
        <RegularText size="regular-medium" color="subtitles">
          {tittle}
        </RegularText>
        <RegularText size="regular-small" color="text">
          {description}
        </RegularText>
      </div>
    </TittleCardContainer>
  )
}
