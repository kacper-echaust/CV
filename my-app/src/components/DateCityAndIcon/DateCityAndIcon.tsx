import { Icon } from './Icon/Icon'
import { DateAndCityName } from './Date/DateAndCityName'
import css from './DateCityAndIcon.module.css'
import classNames from 'classnames'

type DateCityAndIconProps = {
	name: string
	icon: number
	loading: boolean
}

function DateCityAndIcon({ name, icon, loading }: DateCityAndIconProps) {
	const containerClasses = classNames(css.container, { [css.containerLoading]: loading })

	return (
		<div className={containerClasses}>
			<DateAndCityName name={name} loading={loading} />
			{!loading && <Icon name={icon} />}
		</div>
	)
}
export { DateCityAndIcon }
