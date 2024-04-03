import styles from './CV.module.scss'
import { AdditionalInfo } from './additionalInfo/AdditionalInfo'
import { CertificatesInfo } from './certificatesInfo/CertificatesInfo'
import { CoursesInfo } from './coursesInfo/CoursesInfo'
import { EducationInfo } from './educationInfo/EducationInfo'
import { ObjectiveInfo } from './objectiveInfo/ObjectiveInfo'
import { PersonalInfo } from './personInfo/PersonalInfo'
import { ProjectsInfo } from './projectsInfo/ProjectsInfo'
import { SkillsInfo } from './skillsInfo/SkillsInfo'
import { SoftSkillsInfo } from './softSkillsInfo/SoftSkillsInfo'
import { UserNamePosition } from './userNamePosition/UserNamePosition'

const CV = () => {

	return (
		<>
			<div  className={styles.cv}>
				<div className='wrapper'>
					<UserNamePosition />
					<hr />

					<div className={styles.cvBody}>
						<div className={styles.part1}>
							<PersonalInfo />
							<ObjectiveInfo />
							<EducationInfo />
							<SkillsInfo />
							<SoftSkillsInfo />
						</div>

						<div className={styles.part2}>
							<ProjectsInfo />
							<CoursesInfo />
							<CertificatesInfo />
							<AdditionalInfo />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export { CV }
