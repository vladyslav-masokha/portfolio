import { useEffect, useState } from 'react'
import { IReviews } from './IReviews'

const FetchReviews = () => {
	const [reviews, setReviews] = useState<IReviews[] | []>([])

	useEffect(() => {
		const fetchReviewsData = async () => {
			try {
				const response = await fetch('./reviews.json')
				if (!response.ok) {
					throw new Error('Failed to fetch projects data')
				}
				const projectsData: IReviews[] = await response.json()
				setReviews(projectsData)
			} catch (error) {
				console.error('Error fetching projects data:', error)
			}
		}

		fetchReviewsData()
	}, [])

	return reviews
}

export { FetchReviews }
