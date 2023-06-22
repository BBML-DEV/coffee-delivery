import {
  ActionsContainer,
  CoffeeCart,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styled'
import americano from '../../../../../../public/coffees/americano.png'
import { QuantityInput } from '../../../../shared/components/QuantityInput'
import { RegularText } from '../../../../shared/components/Typography/styled'
import { Trash } from '@phosphor-icons/react'
export const CoffeeCartCard = () => {
  return (
    <CoffeeCartCardContainer>
      <CoffeeCart>
        <img src={americano} />
        <div>
          <RegularText color="subtitles">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash />
              remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </CoffeeCart>

      <RegularText size="regular-medium" color="text" weight={700}>
        R$ 9,90
      </RegularText>
    </CoffeeCartCardContainer>
  )
}
