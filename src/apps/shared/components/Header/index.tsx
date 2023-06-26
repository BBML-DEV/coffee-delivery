import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  ButtonHeader,
  HeaderContainer,
  HeaderContainerButtons,
  IconCounter,
} from './styled'
import Logo from '../../../../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { useCoffee } from '../../hooks/useCoffee'

export const Header = () => {
  const { cartItemQuantity } = useCoffee()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to={'/'}>
          <img src={Logo} alt="Logo" />
        </NavLink>

        <HeaderContainerButtons>
          <ButtonHeader variant="purple">
            <MapPin size={22} weight="fill" />
            Porto ALegre, RS
          </ButtonHeader>

          <NavLink to={'/Checkout'}>
            <ButtonHeader variant="yellow">
              {cartItemQuantity >= 1 && (
                <IconCounter>{cartItemQuantity}</IconCounter>
              )}
              <ShoppingCart size={22} weight="fill" />
            </ButtonHeader>
          </NavLink>
        </HeaderContainerButtons>
      </div>
    </HeaderContainer>
  )
}
