import Image from 'next/image'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'
import Timer from '/public/timer.svg'
import { ConfirmationFormData } from './Formulario'
import { useRouter } from 'next/router'

const PaymentMethodTranslate = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  money: 'Dinheiro'
}

export default function Confirmacao() {
  const router = useRouter()
  const { data } = router.query

  if (!data) {
    return <div>Carregando...</div>
  }

  let dataObj: ConfirmationFormData = {}
  try {
    dataObj = JSON.parse(data as string)
  } catch (error) {
    console.error('Erro ao analisar os dados JSON:', error)
    return <div>Erro ao processar os dados de entrega.</div>
  }

  return (
    <>
      <div className="mt-20">
        <h1 className="text-yellow-dark text-[32px] font-baloo2 font-extrabold mb-1">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-base-subtitle text-xl mb-10">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-0.5 bg-gradient-to-r from-yellow to-purple rounded-md rounded-bl-[36px] rounded-tr-[36px] mb-8 md:mr-4 md:mb-0">
          <div className="w-full md:w-[526px] md:h-[296px] bg-white rounded-md rounded-bl-[36px] rounded-tr-[36px]">
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-purple rounded-full w-8 h-8 flex items-center justify-center">
                <FaMapMarkerAlt color="white" />
              </div>
              <div className="w-full md:w-[310px]">
                <p className="text-base-text">
                  Entrega em{' '}
                  <b>
                    {dataObj.street}, {dataObj.number}{' '}
                  </b>
                  {dataObj.city}, {dataObj.UF}
                </p>
              </div>
            </div>
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-yellow rounded-full w-8 h-8 flex items-center justify-center">
                <Image src={Timer} color="white" alt={''} />
              </div>
              <div className="w-full md:w-[310px]">
                <p className="text-base-text">
                  Previsão de entrega
                  <p>
                    <b> 20 min - 30 min </b>
                  </p>
                </p>
              </div>
            </div>
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-yellow-dark rounded-full w-8 h-8 flex items-center justify-center">
                <BiDollar color="white" />
              </div>
              <div className="w-full md:w-[310px]">
                <p className="text-base-text">
                  Pagamento na entrega
                  <p>
                    <b>{PaymentMethodTranslate[dataObj.paymentMethod]}</b>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[492px]">
          <Image
            width={492}
            height={293}
            src={'/ImgConfirmation.png'}
            alt={''}
          />
        </div>
      </div>
    </>
  )
}
