import { useEffect, useState } from 'react'
import { IProjects } from './IProjects'

const FetchProjects = () => {
	const [projects, setProjects] = useState<IProjects[] | null>(null)

	useEffect(() => {
		const fetchProjectsData = async () => {
			try {
				const response = await fetch('./projects.json')
				if (!response.ok) {
					throw new Error('Failed to fetch projects data')
				}
				const projectsData: IProjects[] = await response.json()
				setProjects(projectsData)
			} catch (error) {
				console.error('Error fetching projects data:', error)
			}
		}

		fetchProjectsData()
	}, [])

	return projects
}

export { FetchProjects }
