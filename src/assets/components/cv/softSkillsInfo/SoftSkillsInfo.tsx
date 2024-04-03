import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './SoftSkillsInfo.module.scss'

const SoftSkillsInfo = () => {
	const data = FetchData()

	return (
		<div className={styles.softSkillsInfo}>
			<h2>Soft skills</h2>
			<PurpleLine />

			{data ? (
				data.softSkills.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.softSkillsInfoData}>{el}</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	)
}

export { SoftSkillsInfo }
