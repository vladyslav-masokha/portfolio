import { FetchReviews } from '../../requests/FetchReviews'
import styles from './Reviews.module.scss'

const Review = () => {
	const data = FetchReviews()

	return (
		<>
			{data.length > 0 ? (
				<div className={styles.reviewList}>
					{data.map(review => (
						<div key={review.id} className={styles.reviewItem}>
							<p>{review.review}</p>
							<h4>{review.author}</h4>
						</div>
					))}
				</div>
			) : (
				<p>Відгуки не знайдені з технічних причин!</p>
			)}
		</>
	)
}

export { Review }
