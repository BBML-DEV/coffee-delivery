import { ConfirmedContainer, OrderContainer, OrderInfo } from './styled'
import ilustrationBanner from '../../../assets/Illustration.png'
import {
  RegularText,
  TittleText,
} from '../../shared/components/Typography/styled'
import { InfoWithIcon } from '../../shared/components/InfoWithIcon'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { orderData } from '../Checkout'
import { paymentMethods } from '../Checkout/Components/PaymentMethods'

interface LocationType {
  state: orderData
}

export const Confirmed = () => {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  return (
    <ConfirmedContainer className="container">
      <OrderContainer variant="yellow-dark">
        <TittleText size="large">Uh! Pedido confirmado</TittleText>
        <RegularText size="regular-large" color="subtitles">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>

        <OrderInfo>
          <InfoWithIcon
            icon={<MapPin weight="fill" color={colors.white} />}
            iconBg={colors.purple}
            text={
              <RegularText size="regular-medium" color="text">
                Entrega em <strong>{state.street}</strong>, {state.streetNumber}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Timer weight="fill" color={colors.white} />}
            iconBg={colors.yellow}
            text={
              <RegularText size="regular-medium" color="text">
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" color={colors.white} />}
            iconBg={colors['yellow-dark']}
            text={
              <RegularText size="regular-medium" color="text">
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderInfo>
      </OrderContainer>

      <img src={ilustrationBanner} />
    </ConfirmedContainer>
  )
}
