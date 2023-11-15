import css from './DateAndCityName.module.css'
import { Loader } from '../../Loader/Loader'

const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

type DateAndCityNameProps = {
	name: string
	loading: boolean
}


function DateAndCityName({ name, loading }: DateAndCityNameProps) {
	return (
		<div className={css.containerDateCity}>
			<p className={css.date}>{`${day}.${month}.${year}`}</p>
			{loading ? (
				<Loader />
			) : (
				<>
					<p>{name}</p>
				</>
			)}
		</div>
	)
}

export { DateAndCityName }
