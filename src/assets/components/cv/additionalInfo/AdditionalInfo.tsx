import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './AdditionalInfo.module.scss'

const AdditionalInfo = () => {
	const data = FetchData()

	return (
		<div className={styles.additionalInfo}>
			<h2>Additional information</h2>
			<PurpleLine />

			{data ? (
				data.additionalInfo.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.additionalInfoData}>{el}</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	)
}

export { AdditionalInfo }
