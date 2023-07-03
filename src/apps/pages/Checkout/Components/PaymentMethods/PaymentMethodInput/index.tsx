import { RegularText } from '../../../../../shared/components/Typography/styled'
import { ButtonPaymentWraper } from './styled'
import { InputHTMLAttributes, ReactNode } from 'react'

type PaymentMethodType = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = ({
  id,
  icon,
  label,
  ...props
}: PaymentMethodType) => {
  return (
    <ButtonPaymentWraper>
      {icon}
      <RegularText color="text">{label}</RegularText>
    </ButtonPaymentWraper>
  )
}
