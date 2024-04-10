import { FetchData } from '../../../requests/FetchData'
import { PurpleLine } from '../../../ui/PurpleLine/PurpleLine'
import styles from './CertificatesInfo.module.scss'

const CertificatesInfo = () => {
	const data = FetchData()

	return (
		<div className={styles.certificatesInfo}>
			<h2>Certificates</h2>
			<PurpleLine />

			{data ? (
				data.certificatesUrl.map((el, index) => (
					<div className={styles.data} key={index}>
						<a href={el} className={styles.certificatesInfoData}>
							{el}
						</a>
					</div>
				))
			) : (
				<span>Loading..</span>
			)}
		</div>
	)
}

export { CertificatesInfo }
