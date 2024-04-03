import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../Navigation.module.scss'

interface NavLinkProps {
	to?: string
	href?: string
	text: string
	onClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({ to, href, text, onClick }) => {
	const location = useLocation()

	const handleClick = () => {
		if (onClick) onClick()
	}

	const isActive = to ? location.pathname === to : location.hash === href

	return (
		<>
			{to ? (
				<Link
					to={to}
					onClick={handleClick}
					className={`${styles.navLink} ${isActive ? styles.active : ''}`}
				>
					{text}
				</Link>
			) : (
				<a
					href={href}
					onClick={handleClick}
					className={`${styles.navLink} ${isActive ? styles.active : ''}`}
				>
					{text}
				</a>
			)}
		</>
	)
}

export { NavLink }
