import { Review } from './Review'
import styles from './Reviews.module.scss'

const Reviews = () => {
	return (
		<div className={styles.reviews}>
			<div className='wrapper'>
				<div className={styles.reviewsBody}>
					<h2 className='titleBlock'>Відгуки</h2>
					<Review />
				</div>
			</div>
		</div>
	)
}

export { Reviews }
