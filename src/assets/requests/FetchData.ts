import { useEffect, useState } from 'react'
import { IData } from './IData'

const FetchData = () => {
	const [data, setData] = useState<IData | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('./data.json')
				if (!response.ok) {
					throw new Error('Failed to fetch projects data')
				}
				const projectsData: IData = await response.json()
				setData(projectsData)
			} catch (error) {
				console.error('Error fetching projects data:', error)
			}
		}

		fetchData()
	}, [])

	return data
}

export { FetchData }
