import { ReactNode, createContext, useEffect, useState } from 'react'
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
  totalCart: number
}

interface childrenProps {
  children: ReactNode
}

const COFFEE_STORAGE_CART_ITEMS = 'coffeeStorageItemKey'

export const ContextCoffee = createContext({} as coffeesProps)

export const CoffeesProvider = ({ children }: childrenProps) => {
  const [cartItems, setCartItems] = useState<CoffeesData[]>(() => {
    const storageCartItem = localStorage.getItem(COFFEE_STORAGE_CART_ITEMS)
    if (storageCartItem) {
      return JSON.parse(storageCartItem)
    } else {
      return []
    }
  })
  const cartItemQuantity = cartItems.length
  const totalCart = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price
  }, 0)

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

  useEffect(() => {
    localStorage.setItem(COFFEE_STORAGE_CART_ITEMS, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <ContextCoffee.Provider
      value={{
        cartItems,
        addToCart,
        cartItemQuantity,
        changeQuantityCoffeeInCart,
        removeCoffeeInCart,
        totalCart,
      }}
    >
      {children}
    </ContextCoffee.Provider>
  )
}
