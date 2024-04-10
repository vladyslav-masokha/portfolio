import { Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
	const { pathname } = useLocation()

	return (
		<Link className={styles.navLink} to={pathname === '/' ? '/cv' : '/'}>
			{pathname === '/' ? 'Резюме' : 'Головна'}
		</Link>
	)
}

export { Navigation }
