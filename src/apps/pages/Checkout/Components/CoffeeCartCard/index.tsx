import {
  ActionsContainer,
  CoffeeCart,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styled'
import { QuantityInput } from '../../../../shared/components/QuantityInput'
import { RegularText } from '../../../../shared/components/Typography/styled'
import { Trash } from '@phosphor-icons/react'
import { CoffeesData } from '../../../../shared/context'
import { priceFormat } from '../../../../shared/utils/formatted'
import { useCoffee } from '../../../../shared/hooks/useCoffee'

interface CoffeeCartCardProps {
  coffee: CoffeesData
}

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {
  const totalPriceItem = coffee.price * coffee.quantity

  const { changeQuantityCoffeeInCart, removeCoffeeInCart } = useCoffee()

  const handleInCrease = () => {
    changeQuantityCoffeeInCart(coffee.id, 'increase')
  }

  const handleDeCrease = () => {
    changeQuantityCoffeeInCart(coffee.id, 'decrease')
  }

  const handleRemoveItemInCart = () => {
    removeCoffeeInCart(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <CoffeeCart>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitles">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              key={coffee.id}
              quantity={coffee.quantity}
              deCrease={handleDeCrease}
              inCrease={handleInCrease}
            />
            <RemoveButton onClick={handleRemoveItemInCart}>
              <Trash />
              remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeCart>

      <RegularText size="regular-medium" color="text" weight={700}>
        {priceFormat(totalPriceItem)}
      </RegularText>
    </CoffeeCartCardContainer>
  )
}
