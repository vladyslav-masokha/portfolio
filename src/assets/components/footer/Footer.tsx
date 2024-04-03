import styles from './Footer.module.scss'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className={styles.footer}>
			<div className='wrapper'>
				<div className={styles.footerBody}>
					<p>
						Copyright &copy; <span>Vladyslav Masokha</span> {currentYear}.
					</p>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
