import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { ButtonHeader, HeaderContainer, HeaderContainerButtons } from './styled'
import Logo from '../../../../assets/Logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="Logo" />

        <HeaderContainerButtons>
          <ButtonHeader variant="purple">
            <MapPin size={22} weight="fill" />
            Porto ALegre, RS
          </ButtonHeader>

          <ButtonHeader variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </ButtonHeader>
        </HeaderContainerButtons>
      </div>
    </HeaderContainer>
  )
}
