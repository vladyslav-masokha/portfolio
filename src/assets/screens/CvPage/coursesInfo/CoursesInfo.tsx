import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './CoursesInfo.module.scss'

const CoursesInfo = () => {
	const data = FetchData()

	return (
		<div className={styles.coursesInfo}>
			<h2>Courses</h2>
			<PurpleLine />

			{data ? (
				data.courses.map((el, index) => (
					<div className={styles.data} key={index}>
						<span className={styles.coursesInfoData}>
							{el.year}, {el.data}
						</span>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { CoursesInfo }
