import { Icon } from '../Icon/Icon'
import css from './CurrentWeather.module.css'

const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()


type CurrentWeatherProps = {
	name: string
	icon: number
}
function CurrentWeather({ name, icon }: CurrentWeatherProps) {
	return (
		<div className={css.container}>
			<div className={css.containerDateCity}>
				<p className={css.date}>{`${day}.${month}.${year}`}</p>
				<p>{name}</p>
			</div>
			<Icon name={icon} />
		</div>
	)
}
export { CurrentWeather }
