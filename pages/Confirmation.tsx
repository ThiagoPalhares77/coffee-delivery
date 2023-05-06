import Image from 'next/image'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'
import Timer from '/public/timer.svg'

export default function Confirmation() {
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
      <div className="flex ">
        <div className="p-0.5 bg-gradient-to-r from-yellow to-purple rounded-md rounded-bl-[36px] rounded-tr-[36px] mr-24">
          <div className="w-[526px] h-[296px] bg-white rounded-md rounded-bl-[36px] rounded-tr-[36px]">
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-purple rounded-full w-8 h-8 flex items-center justify-center">
                <FaMapMarkerAlt color="white" />
              </div>
              <div className="w-[310px]">
                <p className="text-base-text">
                  Entrega em <b>Rua João Daniel Martinelli, 102 </b> Farrapos -
                  Porto Alegre, RS
                </p>
              </div>
            </div>
            <div className="pt-10 pl-10 flex gap-3 items-center">
              <div className="bg-yellow rounded-full w-8 h-8 flex items-center justify-center">
                <Image src={Timer} color="white" alt={''} />
              </div>
              <div className="w-[310px]">
                <p className="text-base-text">
                  Previsão de entrega{' '}
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
              <div className="w-[310px]">
                <p className="text-base-text">
                  Pagamento na entrega{' '}
                  <p>
                    <b>Cartão de Crédito</b>{' '}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image width={492} height={293} src={'/ImgConfirmation.png'} alt={''} />
      </div>
    </>
  )
}
