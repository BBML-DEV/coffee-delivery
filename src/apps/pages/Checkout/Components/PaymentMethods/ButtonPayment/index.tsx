import { RegularText } from '../../../../../shared/components/Typography/styled'
import { ButtonPaymentWraper } from './styled'
import { ReactNode } from 'react'

interface ButtonPaymentProps {
  icon?: ReactNode
  text?: string
}

export const ButtonPayment = ({ icon, text }: ButtonPaymentProps) => {
  return (
    <ButtonPaymentWraper>
      {icon}
      <RegularText color="text">{text}</RegularText>
    </ButtonPaymentWraper>
  )
}
