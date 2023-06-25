import { ReactNode, createContext, useState } from 'react'
import { Coffees } from '../../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

interface CoffeesData extends Coffees {
  quantity: number
}

interface coffeesProps {
  cartItems: CoffeesData[]
  addToCart: (coffee: CoffeesData) => void
}

interface childrenProps {
  children: ReactNode
}

export const ContextCoffee = createContext({} as coffeesProps)

export const CoffeesProvider = ({ children }: childrenProps) => {
  const [cartItems, setCartItems] = useState<CoffeesData[]>([])

  function itemAlreadyExistsInCart(coffee: CoffeesData) {
    const itemAlreadyExists = cartItems.findIndex(
      (item) => item.id === coffee.id,
    )

    return itemAlreadyExists
  }

  function addToCart(coffee: CoffeesData) {
    const itemExists = itemAlreadyExistsInCart(coffee)

    const newCartItem = produce(cartItems, (draft) => {
      if (itemExists <= 0) {
        draft.push(coffee)
      } else {
        draft[itemExists].quantity += coffee.quantity
      }
    })

    setCartItems(newCartItem)
  }

  console.log(cartItems)

  return (
    <ContextCoffee.Provider value={{ cartItems, addToCart }}>
      {children}
    </ContextCoffee.Provider>
  )
}
