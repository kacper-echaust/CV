import css from './Icon.module.css'
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
export { Icon }
