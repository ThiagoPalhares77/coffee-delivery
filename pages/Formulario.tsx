import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { useCart } from '../hooks/useCart'
import { CoffeItemsCard } from '../components/CoffeItemsCard'
import { formatMoney } from '../components/FormatterFunctions'
import { Input } from '../components/Input'
import MapPinYellow from '../public/mappinyellow.svg'
import { InputRadio } from '../components/InputRadio'
import { useRouter } from 'next/router'

const paymentMethodObject = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} color="#8047F8" />,
    id: 'credit'
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} color="#8047F8" />,
    id: 'debit'
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} color="#8047F8" />,
    id: 'money'
  }
}

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money'
}

const confirmationFormSchema = z.object({
  cepNumber: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, { message: 'Informe a rua' }),
  number: z.string().min(1, { message: 'Informe o número' }),
  district: z.string().min(1, { message: 'Informe o bairro' }),
  city: z.string().min(1, { message: 'Informe a cidade' }),
  UF: z
    .string()
    .min(1, { message: 'Informe o estado' })
    .max(2, { message: 'Estado inválido' }),
  moreInfo: z.string(),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    }
  })
})

export type ConfirmationFormData = z.infer<typeof confirmationFormSchema>

export default function Formulario() {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<ConfirmationFormData>({
    resolver: zodResolver(confirmationFormSchema)
  })

  const { push } = useRouter()

  function handleConfirmation(data: ConfirmationFormData) {
    console.log('data antes de enviar:', data)
    push({
      pathname: '/Confirmacao',
      query: { data: JSON.stringify(data) }
    })
  }

  const { cartItems, cartCalculation } = useCart()

  const orderPrice = cartCalculation + 3.5

  return (
    <form
      className="flex sm:flex-row flex-col"
      onSubmit={handleSubmit(handleConfirmation)}
    >
      <section>
        <div className="flex flex-col mr-8 bg">
          <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
            Complete seu pedido
          </h1>
          <div className="bg-base-card pt-10 px-10 rounded-md">
            <div className="text-base-subtitle ">
              <h2 className="flex gap-2">
                <Image alt={'Símbolo do mapa'} src={MapPinYellow} />
                Endereço de entrega
              </h2>
              <p className="ml-[30px] mb-8 text-sm">
                Informe o endereço onde deseja receber seu pedido
              </p>

              <div className="mx-5 mb-10 text-sm flex flex-col gap-4">
                <Input
                  type="number"
                  labelObj={{ id: 'cepNumber', label: 'CEP' }}
                  {...register('cepNumber')}
                  error={errors.cepNumber}
                />
                <div>
                  <Input
                    labelObj={{ id: 'street', label: 'Rua' }}
                    {...register('street')}
                    error={errors.street}
                  />
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                  <Input
                    type="number"
                    labelObj={{ id: 'number', label: 'Número' }}
                    {...register('number')}
                    error={errors.number}
                  />
                  <div className="relative inline-block">
                    <Input
                      className="sm:appearance-none bg-base-input rounded-md sm:h-[42px] sm:w-[300px] pl-2"
                      labelObj={{ id: 'moreInfo', label: 'Complemento' }}
                      {...register('moreInfo')}
                      error={errors.moreInfo}
                    />
                    <span className="absolute text-base-label italic flex justify-center items-center right-3 top-3 text-xs">
                      Opcional
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <div>
                    <Input
                      labelObj={{ id: 'district', label: 'Bairro' }}
                      {...register('district')}
                      error={errors.district}
                    />
                  </div>
                  <div className="flex gap-2 w-full">
                    <div className="w-full">
                      <Input
                        className="appearance-none bg-base-input rounded-md sm:w-[250px] w-full h-[42px] pl-2 "
                        labelObj={{ id: 'city', label: 'Cidade' }}
                        {...register('city')}
                        error={errors.city}
                      />
                    </div>
                    <div>
                      <Input
                        className="w-[50px]"
                        labelObj={{ id: 'UF', label: 'UF' }}
                        {...register('UF')}
                        error={errors.UF}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 pb-8 bg-base-card rounded-md mr-8">
          <div className="flex items-center pt-10 px-10">
            <span>
              <CurrencyDollar size={15} color="#8047F8" />
            </span>
            <h2 className="text-base-subtitle">Pagamento</h2>
          </div>
          <p className="text-sm text-base-text px-10 ml-[12px]">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div className="flex mt-8 mx-10 gap-3 text-xs text-base-text">
            {Object.entries(paymentMethodObject).map(
              ([key, { icon, label }]) => (
                <InputRadio
                  key={key}
                  name="paymentMethod"
                  value={key}
                  icon={icon}
                  label={label}
                  {...register('paymentMethod')}
                  id={`payment-method-${key}`}
                />
              )
            )}
          </div>
          {errors.paymentMethod && (
            <span className="ml-10 block text-xs font-medium text-red-error mt-1">
              {errors.paymentMethod.message}
            </span>
          )}
        </div>
      </section>

      <section className="flex flex-col h-[600px]">
        <h1 className="text-base-subtitle font-baloo2 font-bold text-lg mt-10 mb-[15px]">
          Cafés selecionados
        </h1>

        <div className="bg-base-card w-[448px] rounded-md rounded-bl-[36px] rounded-tr-[36px]">
          {cartItems.map((coffee) => (
            <CoffeItemsCard key={coffee.id} coffee={coffee} />
          ))}

          {cartItems.length === 0 ? (
            <div className="w-full mb-3 px-8 py-8">
              <p className="text-xl text-base-text">Seu carrinho está vazio!</p>
              <Link href={'/'}>
                <button
                  className="mt-3 
              border border-gray-500 rounded px-3 py-3 bg-yellow hover:bg-yellow-dark text-white ease-in-out"
                >
                  Clique aqui para retornar para compras
                </button>
              </Link>
            </div>
          ) : (
            <>
              <div className="px-10">
                <div className="w-full flex justify-between mb-3">
                  <span className="text-sm text-base-text">Total de itens</span>
                  <span>{formatMoney(cartCalculation)}</span>
                </div>
                <div className="w-full flex justify-between mb-3">
                  <span className="text-sm text-base-text">Entrega</span>
                  <span>R$ 3,50</span>
                </div>
                <div className="w-full flex justify-between mb-3">
                  <span className="text-xl font-bold text-base-subtitle">
                    Total
                  </span>
                  <span className="text-xl font-bold text-base-subtitle">
                    {formatMoney(orderPrice)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-yellow hover:bg-yellow-dark text-white w-full p-3 rounded-md mb-10"
                >
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </form>
  )
}
