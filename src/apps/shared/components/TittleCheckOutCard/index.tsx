import { ReactNode } from 'react'
import { Icon, TittleCardContainer } from './styled'
import { RegularText } from '../Typography/styled'

interface TittleCheckOutCardProps {
  icon: ReactNode
  tittle: string
  subtitle: string
  iconColor: 'purple' | 'yellow'
}

export const TittleCheckOutCard = ({
  icon,
  tittle,
  subtitle,
  iconColor,
}: TittleCheckOutCardProps) => {
  return (
    <TittleCardContainer>
      <Icon variant={iconColor}>{icon}</Icon>

      <div>
        <RegularText size="regular-medium" color="subtitles">
          {tittle}
        </RegularText>
        <RegularText size="regular-small" color="text">
          {subtitle}
        </RegularText>
      </div>
    </TittleCardContainer>
  )
}
