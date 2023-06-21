import { CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { TittleCheckOutCard } from '../../../../shared/components/TittleCheckOutCard'
import { TittleText } from '../../../../shared/components/Typography/styled'
import { CompleteOrderFormContainer, FormSection } from './styled'
import { AndressForm } from '../AndressForm'
import { PaymentMethod } from '../PaymentMethods'

export const CompleteOrder = () => {
  return (
    <CompleteOrderFormContainer>
      <TittleText size="extra-small" color="subtitles">
        Complete seu pedido
      </TittleText>

      <FormSection>
        <TittleCheckOutCard
          iconColor="yellow"
          icon={<MapPin size={22} />}
          tittle="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />

        <AndressForm />
      </FormSection>

      <FormSection>
        <TittleCheckOutCard
          iconColor="purple"
          icon={<CurrencyDollar size={22} />}
          tittle="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethod />
      </FormSection>
    </CompleteOrderFormContainer>
  )
}
