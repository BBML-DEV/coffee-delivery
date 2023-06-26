import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityInputContainer, IconWrapper } from './styled'

interface QuantityInputProps {
  inCrease: () => void
  deCrease: () => void
  quantity: number
}

export const QuantityInput = ({
  inCrease,
  deCrease,
  quantity,
}: QuantityInputProps) => {
  return (
    <QuantityInputContainer>
      <IconWrapper disabled={quantity <= 0} onClick={deCrease}>
        <Minus size={14} />
      </IconWrapper>

      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={inCrease}>
        <Plus size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
