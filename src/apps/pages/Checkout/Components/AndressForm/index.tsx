import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../shared/components/Input'
import { AndressFormContainer } from './styled'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export const AndressForm = () => {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AndressFormContainer>
      <Input
        type="number"
        className="cep"
        placeholder="CEP"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        type="text"
        className="street"
        placeholder="Rua"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        {...register('streetNumber')}
        error={errors.streetNumber?.message}
      />
      <Input
        type="text"
        className="complement"
        placeholder="Complemento"
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        type="text"
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />

      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />

      <Input placeholder="UF" {...register('uf')} error={errors.uf?.message} />
    </AndressFormContainer>
  )
}
