import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  forwardRef
} from 'react'

type InputRadioComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const InputRadioComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  InputRadioComponentProps
> = ({ id, icon, label, ...props }, ref) => {
  return (
    <div className="flex gap-3">
      <input
        id={id}
        type="radio"
        name="paymentMethod"
        className="peer hidden"
        ref={ref}
        {...props}
      />
      <label
        htmlFor={id}
        className="cursor-pointer bg-base-button p-4 rounded-md peer-checked:bg-[#EBE5F9] peer-checked:border-solid peer-checked:border-purple peer-checked:border-2"
      >
        <div className="flex gap-3">
          {icon}
          {label}
        </div>
      </label>
    </div>
  )
}

export const InputRadio = forwardRef(InputRadioComponent)
