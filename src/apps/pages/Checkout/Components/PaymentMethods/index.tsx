import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethodInput } from './PaymentMethodInput'
import { PaymentMethodContainer } from './styled'

const PaymentMethodData = {
  credit: {
    icon: <CreditCard />,
    label: 'Cartão de crédito',
  },
  debit: {
    icon: <Bank />,
    label: 'Cartão de débito',
  },
  money: {
    icon: <Money />,
    label: 'Dinheiro',
  },
}

export const PaymentMethod = () => {
  return (
    <PaymentMethodContainer>
      {Object.entries(PaymentMethodData).map(([key, { label, icon }]) => (
        <PaymentMethodInput key={key} icon={icon} label={label} />
      ))}
    </PaymentMethodContainer>
  )
}
