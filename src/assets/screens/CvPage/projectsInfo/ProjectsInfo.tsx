import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './ProjectsInfo.module.scss'

const ProjectsInfo = () => {
	const data = FetchData()

	return (
		<div className={styles.projectsInfo}>
			<h2>Projects</h2>
			<PurpleLine />

			{data ? (
				<p className={styles.projectInfoDescription}>
					{data.projectsDescription}
				</p>
			) : null}

			{data ? (
				data.projects.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.projectsInfoData}>
							<a href={el.projectSrc} target='_blank'>
								{el.projectName}{' '}
							</a>
							{el.projectDescription}
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { ProjectsInfo }
