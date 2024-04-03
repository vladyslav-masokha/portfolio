import { FetchData } from '../../../requests/FetchData'
import styles from './UserNamePosition.module.scss'

const UserNamePosition = () => {
	const data = FetchData()

	return (
		<div className={styles.userNamePosition}>
			{data ? (
				<>
					<h1 className={styles.userName}>{data.fullName}</h1>
					<h3 className={styles.userPosition}>{data.position}</h3>
				</>
			) : (
				<h1 className='userName'>Loading..</h1>
			)}
		</div>
	)
}

export { UserNamePosition }
