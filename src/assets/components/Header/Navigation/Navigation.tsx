import { useEffect, useState } from 'react'
import styles from './Navigation.module.scss'
import { NavLink } from './links/NavLink.tsx'

const Navigation = () => {
	const [open, setOpen] = useState(false)

	const openNavigation = () => setOpen(!open)

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	const handleClick = () => setOpen(false)

	return (
		<>
			<nav className={styles.nav} role='navigation'>
				<ul className={open ? `${styles.visible}` : ''}>
					<NavLink to='/' text='Home' onClick={handleClick} />
					<NavLink href='#cv' text='CV' onClick={handleClick} />
					<NavLink href='#projects' text='Projects' onClick={handleClick} />
				</ul>
			</nav>

			<button
				type='button'
				className={
					open ? `${styles.burgerNav} ${styles.open}` : `${styles.burgerNav}`
				}
				onClick={openNavigation}
			>
				<span className={styles.burgerLine}></span>
			</button>
		</>
	)
}

export { Navigation }
