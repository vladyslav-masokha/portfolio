import { FetchProjects } from '../../requests/FetchProjects'
import styles from './Projects.module.scss'

const Project = () => {
	const data = FetchProjects()

	return (
		<>
			{data ? (
				<ul className={styles.projectsList}>
					{data.map(project => (
						<li key={project.id} className={styles.projectItem}>
							<h3 className={styles.projectTitle}>{project.title}</h3>
							<a
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.projectLink}
							>
								<img
									src={project.image}
									alt={project.title}
									className={styles.projectImage}
								/>
							</a>
							<a
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.projectLink}
							>
								View Project
							</a>
						</li>
					))}
				</ul>
			) : (
				<p>No projects found</p>
			)}
		</>
	)
}

export { Project }
