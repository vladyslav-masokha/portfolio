import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './EducationInfo.module.scss'

const EducationInfo = () => {
	const data = FetchData()
	return (
		<div className={styles.educationInfo}>
			<h2>Education</h2>

			<PurpleLine />

			{data ? (
				data.education.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.educationInfoData}>
							{el.institution}, {el.duration}
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { EducationInfo }
