import { CompleteOrder } from './Components/CompleteOrder'
import { SelectCoffees } from './Components/SelectCoffees'
import { CheckOutContainer } from './styled'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formValidationSchema = z.object({
  cep: z.string().min(1, 'Preenche o seu CEP'),
  street: z.string().min(1, 'Preencha o nome da sua Rua'),
  streetNumber: z.string().min(1, 'Preencha o número do seu endereço'),
  complement: z.string(),
  district: z.string().min(1, 'Preencha o nome do seu bairro'),
  city: z.string().min(1, 'Preencha o nome da sua cidade'),
  uf: z.string().min(1, 'Preencha o seu UF'),
})

export type orderData = z.infer<typeof formValidationSchema>

type ConfirmOrderFormData = orderData

export const CheckOut = () => {
  const confirmedForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(formValidationSchema),
  })

  const { handleSubmit } = confirmedForm

  function handleConfirmFormOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmedForm}>
      <CheckOutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmFormOrder)}
      >
        <CompleteOrder />
        <SelectCoffees />
      </CheckOutContainer>
    </FormProvider>
  )
}
