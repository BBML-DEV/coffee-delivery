import { forwardRef, InputHTMLAttributes } from 'react'
import {
  InputStyled,
  InputWrapper,
  InputStyledContainer,
  RightText,
} from './styled'
import { RegularText } from '../Typography/styled'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightTextInput?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ rightTextInput, error, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyledContainer>
          <InputStyled {...props} ref={ref} />
          {rightTextInput && <RightText>{rightTextInput}</RightText>}
        </InputStyledContainer>
        {error && <RegularText size="regular-small">{error}</RegularText>}
      </InputWrapper>
    )
  },
)
