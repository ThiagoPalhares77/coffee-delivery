import {
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  forwardRef
} from 'react'
import { type FieldError } from 'react-hook-form'

interface LabelObj {
  id: string
  label: string
}

interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'className'> {
  labelObj?: LabelObj
  error?: FieldError
  className?: string
  type?: string
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { labelObj, className = '', error, type, ...rest },
  ref
) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <input
        type={type}
        id={labelObj?.id}
        placeholder={labelObj?.label}
        className={`appearance-none bg-base-input rounded-md h-[42px] pl-2 ${className} ${
          error ? 'border-red-error' : 'border-neutral-400'
        }`}
        ref={ref}
        {...rest}
      />

      {error && (
        <span className="block text-xs font-medium text-red-error ml-1 mt-1">
          {error.message}
        </span>
      )}
    </div>
  )
}

export const Input = forwardRef(InputComponent)
