import {
  Badges,
  IntroContainer,
  IntroContent,
  IntroText,
  IntroTittle,
} from './styled'
import introBanner from '../../../../../assets/introBanner.png'
import { InfoWithIcon } from '../../../../shared/components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { ShoppingCart } from '@phosphor-icons/react'

export const Intro = () => {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTittle size="extra-large">
              Encontre o café perfeiro para qualquer hora do dia
            </IntroTittle>
            <IntroText size="regular-large" color="subtitles">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </IntroText>
          </section>

          <Badges>
            <InfoWithIcon
              iconBg={colors['yellow-dark']}
              icon={
                <ShoppingCart size={16} color={colors.white} weight="fill" />
              }
              text={'Compra simples e segura'}
            />

            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={
                <ShoppingCart size={16} color={colors.white} weight="fill" />
              }
              text={'Embalagem mantém o café intacto'}
            />

            <InfoWithIcon
              iconBg={colors.yellow}
              icon={
                <ShoppingCart size={16} color={colors.white} weight="fill" />
              }
              text={'Entrega rápida e rastreada'}
            />

            <InfoWithIcon
              iconBg={colors.purple}
              icon={
                <ShoppingCart size={16} color={colors.white} weight="fill" />
              }
              text={'O café chega fresquinho até você'}
            />
          </Badges>
        </div>

        <img src={introBanner} />
      </IntroContent>
    </IntroContainer>
  )
}
