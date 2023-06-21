import { Input } from '../../../../shared/components/Input'
import { AndressFormContainer } from './styled'

export const AndressForm = () => {
  return (
    <AndressFormContainer>
      <Input type="number" className="cep" placeholder="CEP" />
      <Input type="text" className="street" placeholder="Rua" />
      <Input type="number" placeholder="Número" />
      <Input type="text" className="complement" placeholder="Complemento" />
      <Input type="text" placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AndressFormContainer>
  )
}
