import React from 'react'

export interface ButtonProps {
	  children: React.ReactNode,
	  onClick?: (e:React.MouseEvent<HTMLElement>) => void,
	  autoFocus?: boolean | undefined,
	  disabled?: boolean | undefined,
	  form?: string | undefined,
	  formAction?: string | undefined,
	  formEncType?: string | undefined,
	  formMethod?: string | undefined,
	  formNoValidate?: boolean | undefined,
	  formTarget?: string | undefined,
	  name?: string | undefined,
	  type?: 'submit' | 'reset' | 'button' | undefined,
	  value?: string | ReadonlyArray<string> | number | undefined,
	  className?: string | undefined,
}

const Button: React.FunctionComponent<ButtonProps> = ({children, ...ButtonProps}) => {
  return (
	<button {...ButtonProps}>{children}</button>
  )
}

export default Button