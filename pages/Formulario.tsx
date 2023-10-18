import { Form } from '../components/Form'
import { PaymentMethod } from '../components/PaymentMethod'
import { SelectedCoffees } from '../components/SelectedCoffees'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

const confirmationFormSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep')
})

export type OrderData = zod.infer<typeof confirmationFormSchema>

type ConfirmationFormData = OrderData

export default function Formulario() {
  const confirmationForm = useForm<ConfirmationFormData>({
    resolver: zodResolver(confirmationFormSchema)
  })

  const { handleSubmit } = confirmationForm

  function handleConfirmation(data: ConfirmationFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmationForm}>
      <div>
        <form
          className="flex flex-row"
          onSubmit={handleSubmit(handleConfirmation)}
        >
          <div>
            <Form />
            <PaymentMethod />
          </div>
          <SelectedCoffees onConfirmOrder={handleConfirmation} />
        </form>
      </div>
    </FormProvider>
  )
}
