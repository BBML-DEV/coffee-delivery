import { ConfirmedContainer, OrderContainer, OrderInfo } from './styled'
import ilustrationBanner from '../../../assets/Illustration.png'
import {
  RegularText,
  TittleText,
} from '../../shared/components/Typography/styled'
import { InfoWithIcon } from '../../shared/components/InfoWithIcon'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export const Confirmed = () => {
  const { colors } = useTheme()

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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderInfo>
      </OrderContainer>

      <img src={ilustrationBanner} />
    </ConfirmedContainer>
  )
}
