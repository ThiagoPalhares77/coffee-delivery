import { Form } from '../components/Form'
import { SelectedCoffees } from '../components/SelectedCoffees'

export default function completeOrder() {
  return (
    <div className="mx-40">
      <div className="flex flex-row">
        <Form />
        <SelectedCoffees />
      </div>
      <div></div>
    </div>
  )
}
