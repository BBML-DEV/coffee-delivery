import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { ButtonHeader, HeaderContainer, HeaderContainerButtons } from './styled'
import Logo from '../../../../assets/Logo.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
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
              <ShoppingCart size={22} weight="fill" />
            </ButtonHeader>
          </NavLink>
        </HeaderContainerButtons>
      </div>
    </HeaderContainer>
  )
}
