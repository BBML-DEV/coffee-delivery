import { CreditCard } from '@phosphor-icons/react'
import { ButtonPayment } from './ButtonPayment'
import { PaymentMethodContainer } from './styled'
import { useTheme } from 'styled-components'

export const PaymentMethod = () => {
  const { colors } = useTheme()

  return (
    <PaymentMethodContainer>
      <ButtonPayment
        icon={<CreditCard color={colors.purple} />}
        text="Cartão de crédito"
      />

      <ButtonPayment
        icon={<CreditCard color={colors.purple} />}
        text="Cartão de crédito"
      />

      <ButtonPayment
        icon={<CreditCard color={colors.purple} />}
        text="Cartão de crédito"
      />
    </PaymentMethodContainer>
  )
}
