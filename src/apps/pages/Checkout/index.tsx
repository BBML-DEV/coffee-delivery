import { CompleteOrder } from './CompleteOrder'
import { CheckOutContainer } from './styled'

export const CheckOut = () => {
  return (
    <CheckOutContainer className="container">
      <CompleteOrder />
      <CompleteOrder />
    </CheckOutContainer>
  )
}
