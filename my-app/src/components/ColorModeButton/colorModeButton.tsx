import css from './colorModeButton.module.css'
import { ChangeEvent } from 'react'

type ButtonProps = { onChange: (event: ChangeEvent<HTMLInputElement>) => void }

function ColorModeButton({ onChange }: ButtonProps) {
	return (
		<>
			<label className={css.switch}>
				<input type='checkbox' onChange={onChange} />
				<span className={css.slider}></span>
			</label>
		</>
	)
}
export { ColorModeButton }
