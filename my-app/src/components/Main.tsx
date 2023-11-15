//Komponenty
import { Input } from './Input/Input'
import { DateCityAndIcon } from './DateCityAndIcon/DateCityAndIcon'
import { Information } from './Information/Information'
import { ColorModeButton } from './ColorModeButton/colorModeButton'
//Hooki
import { useMain } from './useMain'
import { useColorModeButton } from './ColorModeButton/useColorModeButton'
import { DarkModeContext } from './DarkModeContext'
//Css
import css from './Main.module.css'
import classNames from 'classnames'

function Main() {
	const { weather, handleCityChange, loading, error } = useMain()
	const { colorMode, changeColorMode } = useColorModeButton()
	//Klasy
	const panelClasses = classNames(css.panel, { [css.panelLoading]: loading }, { [css.panelDarkMode]: colorMode })
	const containerClasses = classNames(css.container, { [css.containerDarkMode]: colorMode })

	return (
		<DarkModeContext.Provider value={colorMode}>
			<div className={containerClasses}>
				<ColorModeButton onChange={changeColorMode} />
				<div className={panelClasses}>
					{!loading && (
						<Input type='text' placeholder='Wpisz miasto' onChange={handleCityChange} error={error} />
					)}
					<DateCityAndIcon name={weather.name} icon={weather.icon} loading={loading} />
					{weather && (
						<Information
							temperature={weather.temp}
							humidity={weather.humidity}
							pressure={weather.pressure}
						/>
					)}
				</div>
			</div>
		</DarkModeContext.Provider>
	)
}
export { Main }
