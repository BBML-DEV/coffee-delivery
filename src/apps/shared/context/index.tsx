import { ReactNode, createContext, useState } from 'react'
import { Coffees } from '../../pages/Home/components/CoffeeCard'
import { produce } from 'immer'

export interface CoffeesData extends Coffees {
  quantity: number
}

interface coffeesProps {
  cartItems: CoffeesData[]
  addToCart: (coffee: CoffeesData) => void
  cartItemQuantity: number
  changeQuantityCoffeeInCart: (
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCoffeeInCart: (coffeeId: number) => void
}

interface childrenProps {
  children: ReactNode
}

export const ContextCoffee = createContext({} as coffeesProps)

export const CoffeesProvider = ({ children }: childrenProps) => {
  const [cartItems, setCartItems] = useState<CoffeesData[]>([])
  const cartItemQuantity = cartItems.length

  function addToCart(coffee: CoffeesData) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (coffeeInCart) => coffeeInCart.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
    console.log(coffeeAlreadyExistsInCart)
  }

  function changeQuantityCoffeeInCart(
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]
        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCoffeeInCart(coffeeId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (coffee) => coffee.id === coffeeId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  return (
    <ContextCoffee.Provider
      value={{
        cartItems,
        addToCart,
        cartItemQuantity,
        changeQuantityCoffeeInCart,
        removeCoffeeInCart,
      }}
    >
      {children}
    </ContextCoffee.Provider>
  )
}
