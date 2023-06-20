import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityInputContainer, IconWrapper } from './styled'

export const QuantityInput = () => {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus size={14} />
      </IconWrapper>

      <input type="number" readOnly value={1} />

      <IconWrapper>
        <Plus size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
