import { forwardRef, InputHTMLAttributes } from 'react'
import { InputStyled, InputWrapper } from './styled'
import { RegularText } from '../Typography/styled'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyled {...props} ref={ref} />
        {error && <RegularText size="regular-small">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
