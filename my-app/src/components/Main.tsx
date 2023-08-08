//Komponenty
import { Input } from './Input/Input'
import { CurrentWeather } from './CurrentWeather/CurrentWeather'
import { Information } from './Information/Information'
//Hooki
import { useMain } from './useMain'
//Css
import css from './Main.module.css'

function Main() {
	const { city, handleCityChange } = useMain()

	return (
		<div className={css.container}>
			<Input type='text' placeholder='Wpisz miasto' onChange={handleCityChange} />
			<CurrentWeather name={city.name} icon={city.icon} />
			<Information temperature={city.temp} humidity={city.humidity} pressure={city.pressure} />
		</div>
	)
}
export { Main }
