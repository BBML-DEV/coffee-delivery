import { Outlet } from 'react-router-dom'
import { Header } from '../shared/components/Header'
import { LayoutContainer } from './styled'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
