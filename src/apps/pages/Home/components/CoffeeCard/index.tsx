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
import { coffees } from '../OurCoffees'
import { priceFormat } from '../../../../shared/utils/formatted'

type coffeeCardProps = {
  coffee: coffees
}

export const CoffeeCard = ({ props }: coffeeCardProps) => {
  return (
    <CardContainer>
      <img src={`/coffees/${props.photo}`} alt="" />
      <TagContainer>
        {props.tags.map((tag) => (
          <Tag key={tag} weight={700}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
      <TitleCard size="small" color="subtitles">
        {props.name}
      </TitleCard>
      <DescriptionCard size="regular-small" weight={400} color="label">
        {props.description}
      </DescriptionCard>

      <Actions>
        <Price>
          <RegularText size="regular-small" color="text">
            RS
          </RegularText>
          <TittleText size="medium" color="title">
            {priceFormat(props.price)}
          </TittleText>
        </Price>

        <BuyButtonsContainer>
          <QuantityInput />

          <button>
            <ShoppingCartSimple size={28} color="#ffffff" weight="fill" />
          </button>
        </BuyButtonsContainer>
      </Actions>
    </CardContainer>
  )
}
