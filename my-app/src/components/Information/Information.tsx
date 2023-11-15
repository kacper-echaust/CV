import css from './Information.module.css'
type InformationProps = {
	temperature: number
	humidity: string
	pressure: string
}
function Information({ temperature, humidity, pressure}: InformationProps) {
	return (
		<div className={css.boxInfo}>
			<p>Temperatura: {temperature} &#176;C</p>
			<p>Wilgotność: {humidity} %</p>
			<p>Cisnienie: {pressure} hPa</p>
		</div>
	)
}
export { Information }
