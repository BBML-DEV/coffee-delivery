import { ReactNode, createContext, useState } from 'react'
import { coffees } from '../data/coffees'
import { Coffees } from '../../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CoffeesData extends Coffees {
  quantity: number
}

interface CoffeesContextProps {
  coffees: CoffeesData[]
  addCoffeeToCart: (coffee: CoffeesData) => void
}

interface childrenProps {
  children: ReactNode
}

export const ContextCoffee = createContext({} as CoffeesContextProps)

export const CoffeesProvider = ({ children }: childrenProps) => {
  const [cartItem, setCartItem] = useState<CoffeesData[]>([])

  function addCoffeeToCart(coffee: CoffeesData) {
    const coffeeExistsInCart = cartItem.findIndex(
      (coffeCart) => coffeCart.id === coffee.id,
    )

    const newCart = produce(cartItem, (draft) => {
      if (coffeeExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItem(newCart)
  }

  return (
    <ContextCoffee.Provider value={{ addCoffeeToCart, coffees }}>
      {children}
    </ContextCoffee.Provider>
  )
}
