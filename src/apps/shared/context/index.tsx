import { ReactNode, createContext } from 'react'
import { coffees } from '../data/coffees'

interface CoffeesData {
  id: number
  tags: Array<string>
  name: string
  description: string
  photo: string
  price: number
}

interface coffeesProps {
  coffees: CoffeesData[]
}

interface childrenProps {
  children: ReactNode
}

export const ContextCoffee = createContext({} as coffeesProps)

export const CoffeesProvider = ({ children }: childrenProps) => {
  return (
    <ContextCoffee.Provider value={{ coffees }}>
      {children}
    </ContextCoffee.Provider>
  )
}
