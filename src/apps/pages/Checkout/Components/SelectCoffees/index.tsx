import {
  TittleText,
  RegularText,
} from '../../../../shared/components/Typography/styled'
import { useCoffee } from '../../../../shared/hooks/useCoffee'
import { CoffeeCartCard } from '../CoffeeCartCard'
import {
  SectionSelectCoffeesCard,
  SelectCoffeesContainer,
  SectionPriceCart,
  Prices,
  BuyButton,
} from './styled'
import { priceFormat } from '../../../../shared/utils/formatted'

const DELIVERY_PRICE = 3.5

export const SelectCoffees = () => {
  const { cartItems, totalCart } = useCoffee()

  const cartTotal = DELIVERY_PRICE + totalCart

  return (
    <SelectCoffeesContainer>
      <TittleText size="extra-small" color="subtitles">
        Cafés selecionados
      </TittleText>

      <SectionSelectCoffeesCard>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        {cartItems.length > 0 ? (
          <SectionPriceCart>
            <Prices>
              <div>
                <RegularText size="regular-small" color="text">
                  total de itens
                </RegularText>
                <RegularText size="regular-medium" color="text">
                  {priceFormat(totalCart)}
                </RegularText>
              </div>
              <div>
                <RegularText size="regular-small" color="text">
                  Entrega
                </RegularText>
                <RegularText size="regular-medium" color="text">
                  {priceFormat(DELIVERY_PRICE)}
                </RegularText>
              </div>
              <div>
                <RegularText
                  size="regular-large"
                  weight={700}
                  color="subtitles"
                >
                  Total a pagar
                </RegularText>
                <RegularText
                  size="regular-large"
                  weight={700}
                  color="subtitles"
                >
                  {priceFormat(cartTotal)}
                </RegularText>
              </div>
            </Prices>

            <BuyButton type="submit">CONFIRMAR PEDIDO</BuyButton>
          </SectionPriceCart>
        ) : (
          <h1>O Carrinho está vazio</h1>
        )}
      </SectionSelectCoffeesCard>
    </SelectCoffeesContainer>
  )
}
