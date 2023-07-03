import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethodInput } from './PaymentMethodInput'
import { PaymentMethodContainer } from './styled'
import { useForm, useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../shared/components/Typography/styled'

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
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodContainer>
      {Object.entries(PaymentMethodData).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          id={key}
          value={key}
          key={key}
          icon={icon}
          label={label}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodContainer>
  )
}
