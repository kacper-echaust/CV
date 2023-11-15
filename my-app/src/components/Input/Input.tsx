import { ChangeEventHandler, useContext } from 'react'
import css from './Input.module.css'
import classNames from 'classnames'
import { DarkModeContext } from '../DarkModeContext'

type InputProps = {
	type: string
	placeholder: string
	onChange: ChangeEventHandler<HTMLInputElement>
	error: string
}

function Input({ type, placeholder, onChange, error }: InputProps) {
	const darkMode = useContext(DarkModeContext)

	const inputClasses = classNames(css.input, { [css.darkMode]: darkMode })
	return (
			<>
			<input
				type={type}
				placeholder={placeholder}
				className={inputClasses}
				onChange={onChange}
				data-darkMode={darkMode}
				/>
			
			<p className={css.error}>{error}</p>
				</>

	)
}

export { Input }
