import { InputStyled } from './styled'

type inputProps = inputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...props }: inputProps) => {
  return <InputStyled {...props} />
}
