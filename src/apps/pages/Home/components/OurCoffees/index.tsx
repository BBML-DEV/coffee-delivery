import { TittleText } from '../../../../shared/components/Typography/styled'
import { CoffeesContainer, CoffeesList } from './styled'

export const OurCoffees = () => {
  return (
    <CoffeesContainer className="container">
      <TittleText size="large" color="subtitles">
        Nossos cafés
      </TittleText>

      <CoffeesList></CoffeesList>
    </CoffeesContainer>
  )
}
