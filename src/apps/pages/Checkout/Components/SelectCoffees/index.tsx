import {
  TittleText,
  RegularText,
} from '../../../../shared/components/Typography/styled'
import { CoffeeCartCard } from '../CoffeeCartCard'
import {
  SectionSelectCoffeesCard,
  SelectCoffeesContainer,
  SectionPriceCart,
  Prices,
  BuyButton,
} from './styled'

export const SelectCoffees = () => {
  return (
    <SelectCoffeesContainer>
      <TittleText size="extra-small" color="subtitles">
        Cafés selecionados
      </TittleText>

      <SectionSelectCoffeesCard>
        <CoffeeCartCard />

        <CoffeeCartCard />

        <CoffeeCartCard />

        <SectionPriceCart>
          <Prices>
            <div>
              <RegularText size="regular-small" color="text">
                total de itens
              </RegularText>
              <RegularText size="regular-medium" color="text">
                RS29,70
              </RegularText>
            </div>
            <div>
              <RegularText size="regular-small" color="text">
                total de itens
              </RegularText>
              <RegularText size="regular-medium" color="text">
                RS29,70
              </RegularText>
            </div>
            <div>
              <RegularText size="regular-large" weight={700} color="subtitles">
                total de itens
              </RegularText>
              <RegularText size="regular-large" weight={700} color="subtitles">
                RS29,70
              </RegularText>
            </div>
          </Prices>

          <BuyButton>CONFIRMAR PEDIDO</BuyButton>
        </SectionPriceCart>
      </SectionSelectCoffeesCard>
    </SelectCoffeesContainer>
  )
}
