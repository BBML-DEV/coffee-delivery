import { CompleteOrder } from './Components/CompleteOrder'
import { SelectCoffees } from './Components/SelectCoffees'
import { CheckOutContainer } from './styled'

export const CheckOut = () => {
  return (
    <CheckOutContainer className="container">
      <CompleteOrder />
      <SelectCoffees />
    </CheckOutContainer>
  )
}
