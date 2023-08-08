import { ChangeEvent, useState } from 'react'

let previousTimeId: ReturnType<typeof setTimeout>

const useMain = () => {
	const [city, setCity] = useState({
		name: '',
		temp: 0,
		humidity: '',
		pressure: '',
		icon: 0,
	})

	const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
		clearTimeout(previousTimeId)
		previousTimeId = setTimeout(() => {
			const { value } = event.target

			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=pl&appid=6fece57f4563a7a93cab48cf4721535c&units=metric`
			)
				.then(response => response.json())
				.then(data => {
					setCity({
						name: data?.name ?? 'Nie znaleziono miasta',
						temp: Math.round(data?.main?.temp),
						humidity: data?.main?.humidity,
						pressure: data?.main?.pressure,
						icon: data?.weather?.[0]?.id,
					})
				})
				.catch(err => console.log(err))
		}, 2000)
	}
	return { city, handleCityChange }
}
export { useMain }
