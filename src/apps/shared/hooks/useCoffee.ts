import { useContext } from 'react'
import { ContextCoffee } from '../context'

export function useCoffee() {
  const context = useContext(ContextCoffee)
  return context
}
