import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './SkillsInfo.module.scss'

const SkillsInfo = () => {
	const data = FetchData()

	return (
		<div className={styles.skillsInfo}>
			<h2>Skills</h2>

			<PurpleLine />

			{data ? (
				data.skills.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.skillsInfoData}>{el}</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { SkillsInfo }
