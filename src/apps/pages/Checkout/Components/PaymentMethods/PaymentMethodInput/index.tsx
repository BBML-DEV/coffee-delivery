import { RegularText } from '../../../../../shared/components/Typography/styled'
import { PaymentMethodContainer, ContentPaymentContainer } from './styled'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type PaymentMethodType = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodType
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentPaymentContainer>
          {icon}
          <RegularText size="regular-small" color="label">
            {label}
          </RegularText>
        </ContentPaymentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
