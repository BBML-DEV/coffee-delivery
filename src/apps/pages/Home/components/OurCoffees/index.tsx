import { TittleText } from '../../../../shared/components/Typography/styled'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer, CoffeesList } from './styled'
import { coffees } from '../../../../shared/data/coffees'

export interface coffees {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export const OurCoffees = () => {
  return (
    <CoffeesContainer className="container">
      <TittleText size="large" color="subtitles">
        Nossos cafés
      </TittleText>

      <CoffeesList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} props={coffee} />
        ))}
      </CoffeesList>
    </CoffeesContainer>
  )
}
