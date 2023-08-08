import { ChangeEventHandler } from 'react'
import css from './Input.module.css'

type InputProps = {
	type: string
	placeholder: string
	onChange: ChangeEventHandler<HTMLInputElement>
}
function Input({ type, placeholder, onChange }: InputProps) {
	return <input type={type} placeholder={placeholder} className={css.input} onChange={onChange} />
}
export { Input }
