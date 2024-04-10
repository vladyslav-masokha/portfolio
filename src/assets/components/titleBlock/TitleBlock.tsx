import styles from './TitleBlock.module.scss'

const TitleBlock = () => {
	return (
		<div className={styles.titleBlock}>
			<div className='wrapper'>
				<div className={styles.titleBlockBody}>
					<h2>
						Привіт, Я Владислав Масоха
						<p className={styles.position}>Frontend developer</p>
					</h2>
					<img src="./images/code.webp" alt="" />
				</div>
			</div>
		</div>
	)
}

export { TitleBlock }
