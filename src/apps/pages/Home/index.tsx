import { Intro } from './components/Intro'
import { OurCoffees } from './components/OurCoffees'
import { HomeContainer } from './styled'

export const Home = () => {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
