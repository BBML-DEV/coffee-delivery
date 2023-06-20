import { MapPin } from '@phosphor-icons/react'
import { TittleCheckOutCard } from '../../../shared/components/TittleCheckOutCard'
import { TittleText } from '../../../shared/components/Typography/styled'
import { CompleteOrderFormContainer, FormSection } from './styled'

interface inputTypes {
  id: number
  type: string | number
  placeholder: string
}
export const CompleteOrder = () => {
  const fieldsInputs = [
    {
      id: 1,
      type: 'text',
      placeholder: 'cep',
    },
    {
      id: 2,
      type: 'text',
      placeholder: 'rua',
    },
    {
      id: 3,
      type: 'number',
      placeholder: 'número',
    },
    {
      id: 4,
      type: 'text',
      placeholder: 'complemento',
    },
    {
      id: 5,
      type: 'text',
      placeholder: 'bairro',
    },
    {
      id: 6,
      type: 'text',
      placeholder: 'cidade',
    },
    {
      id: 7,
      type: 'text',
      placeholder: 'uf',
    },
  ]

  return (
    <CompleteOrderFormContainer>
      <TittleText size="extra-small" color="subtitles">
        Complete seu pedido
      </TittleText>

      <FormSection>
        <TittleCheckOutCard
          icon={<MapPin size={22} />}
          tittle="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
        />

        <div>
          {fieldsInputs.map((value) => (
            <input
              type={value.type}
              key={value.id}
              placeholder={value.placeholder}
            />
          ))}
        </div>
      </FormSection>
    </CompleteOrderFormContainer>
  )
}
