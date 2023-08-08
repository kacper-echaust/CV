import { useMain } from './useMain'
import css from './Main.module.css'

const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

type IconProps = {
	name: number
}

function Icon({ name }: IconProps) {
	if (name >= 200 && name <= 232) {
		return <div className={css.iconThunderstorm}></div>
	} else if (name >= 300 && name <= 531) {
		return <div className={css.iconRain}></div>
	} else if (name >= 600 && name <= 622) {
		return <div className={css.iconSnow}></div>
	} else if (name >= 701 && name <= 781) {
		return <div className={css.iconRain}></div>
	} else if (name === 800) {
		return <div className={css.iconSun}></div>
	} else if (name >= 801 && name <= 804) {
		return <div className={css.iconCloudy}></div>
	} else {
		return <div></div>
	}
}

function Main() {
	const { city, handleCityChange } = useMain()

	return (
		<div className={css.container}>
			<input type='text' placeholder='Wpisz miasto' className={css.input} onChange={handleCityChange} />
			<div className={css.containerIcons}>
				<div className={css.containerDateCity}>
					<p className={css.date}>{`${day}.${month}.${year}`}</p>
					<p>{city.name}</p>
				</div>
				<Icon name={city.icon} />
			</div>
			<div className={css.boxInfo}>
				<p>Temperatura: {city.temp} &#176;C</p>
				<p>Wilgotność: {city.humidity} %</p>
				<p>Cisnienie: {city.pressure} hPa</p>
			</div>
		</div>
	)
}
export { Main }
