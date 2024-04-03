import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './PersonalInfo.module.scss'

const PersonalInfo = () => {
	const data = FetchData()

	return (
		<div className={styles.personalInfo}>
			<h2>Personal information</h2>
			<PurpleLine />

			{data ? (
				data.contactInformation.map((el, index) => (
					<div className={styles.data} key={index}>
						<span dangerouslySetInnerHTML={{ __html: el.icon }} />
						<span className={styles.personalInfoData}>
							{el.source}:{' '}
							<a href={el.data} target='_blank'>
								{el.value}
							</a>
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { PersonalInfo }
