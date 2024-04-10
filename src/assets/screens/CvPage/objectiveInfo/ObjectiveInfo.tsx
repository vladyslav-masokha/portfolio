import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './ObjectiveInfo.module.scss'

const ObjectiveInfo = () => {
	const data = FetchData()
	return (
		<div className={styles.objectiveInfo}>
			<h2>Objective</h2>
			<PurpleLine />

			{data ? (
				<p className={styles.objectiveInfoData}>{data.summary}</p>
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { ObjectiveInfo }
