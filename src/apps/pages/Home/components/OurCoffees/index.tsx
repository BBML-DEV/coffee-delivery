import { TittleText } from '../../../../shared/components/Typography/styled'
import { coffees } from '../../../../shared/data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeesContainer, CoffeesList } from './styled'

export const OurCoffees = () => {
  return (
    <CoffeesContainer className="container">
      <TittleText size="large" color="subtitles">
        Nossos cafés
      </TittleText>

      <CoffeesList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesList>
    </CoffeesContainer>
  )
}
