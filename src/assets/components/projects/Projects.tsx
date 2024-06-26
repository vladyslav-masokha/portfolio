import { Project } from './Project'
import styles from './Projects.module.scss'

const Projects = () => {
	return (
		<div className={styles.projects}>
			<div className='wrapper'>
				<div className={styles.projectsBody}>
					<h2 className='titleBlock'>
						Відкрийте для себе наші вибрані проєкти
					</h2>
					<Project />
				</div>
			</div>
		</div>
	)
}

export { Projects }
