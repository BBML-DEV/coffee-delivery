import {
  Actions,
  BuyButtonsContainer,
  CardContainer,
  DescriptionCard,
  Price,
  Tag,
  TagContainer,
  TitleCard,
} from './styled'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import {
  RegularText,
  TittleText,
} from '../../../../shared/components/Typography/styled'
import { QuantityInput } from '../../../../shared/components/QuantityInput'
import { priceFormat } from '../../../../shared/utils/formatted'
import { useState } from 'react'
import { useCoffee } from '../../../../shared/hooks/useCoffee'

export interface Coffees {
  id: number
  tags: Array<string>
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffees
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCoffee()

  function handleInCrease() {
    setQuantity(quantity + 1)
  }

  function handleDeCrease() {
    setQuantity(quantity - 1)
  }

  function handleAddToCard() {
    const newCoffee = {
      ...coffee,
      quantity,
    }

    addToCart(newCoffee)
  }

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <TagContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag} weight={700}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
      <TitleCard size="small" color="subtitles">
        {coffee.name}
      </TitleCard>
      <DescriptionCard size="regular-small" weight={400} color="label">
        {coffee.description}
      </DescriptionCard>

      <Actions>
        <Price>
          <RegularText size="regular-small" color="text">
            RS
          </RegularText>
          <TittleText size="medium" color="title">
            {priceFormat(coffee.price)}
          </TittleText>
        </Price>

        <BuyButtonsContainer>
          <QuantityInput
            inCrease={handleInCrease}
            deCrease={handleDeCrease}
            quantity={quantity}
          />

          <button onClick={handleAddToCard}>
            <ShoppingCartSimple size={28} color="#ffffff" weight="fill" />
          </button>
        </BuyButtonsContainer>
      </Actions>
    </CardContainer>
  )
}
