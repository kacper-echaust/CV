// import { Icon } from './Icon/Icon'
import { useMain } from './useMain'
import css from './Main.module.css'

const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

function Main() {
	const { city, weatherChange } = useMain()
	function Icon() {
		if (city.icon >= 200 && city.icon <= 232) {
			return <div className={css.iconThunderstorm}></div>
		} else if (city.icon >= 300 && city.icon <= 531) {
			return <div className={css.iconRain}></div>
		} else if (city.icon >= 600 && city.icon <= 622) {
			return <div className={css.iconSnow}></div>
		} else if (city.icon >= 701 && city.icon <= 781) {
			return <div className={css.iconRain}></div>
		} else if (city.icon === 800) {
			return <div className={css.iconSun}></div>
		} else if (city.icon >= 801 && city.icon <= 804) {
			return <div className={css.iconCloudy}></div>
		} else {
			return <div></div>
		}
	}

	return (
		<div className={css.container}>
			<input type='text' placeholder='Wpisz miasto' className={css.input} onChange={weatherChange} />
			<div className={css.containerIcons}>
				<div className={css.containerDateCity}>
					<p className={css.date}>{`${day}.${month}.${year}`}</p>
					<p>{city.name}</p>
				</div>
				<Icon />
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
