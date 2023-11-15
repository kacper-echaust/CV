import { ChangeEvent, useState } from 'react'

let previousTimeId: ReturnType<typeof setTimeout>

const useMain = () => {
	const [loading, setLoading] = useState(false)
	const [weather, setWeather] = useState({
		name: '',
		temp: 0,
		humidity: '',
		pressure: '',
		icon: 0,
	})
	const [error, setError] = useState('')


	const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
		clearTimeout(previousTimeId)
		previousTimeId = setTimeout(() => {
			async function fetchWeather() {
				try {
					setLoading(true)
					const { value } = event.target
					const response = await fetch(
						`https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=pl&appid=6fece57f4563a7a93cab48cf4721535c&units=metric`
					)

					if (response.status !== 200) {
						throw new Error('błąd')
					}

					const city = await response.json()

					setWeather({
						name: city?.name,
						temp: Math.round(city?.main?.temp),
						humidity: city?.main?.humidity,
						pressure: city?.main?.pressure,
						icon: city?.weather?.[0]?.id,
					})
				} catch (error: unknown) {
					setError((error as Error).message)
				} finally {
					setLoading(false)
				}
			}

			fetchWeather()
		}, 2000)
	}
	return { weather, handleCityChange, loading, error}
}
export { useMain }
