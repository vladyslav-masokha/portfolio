import { Header } from './assets/components/Header/Header'
import { CV } from './assets/components/cv/CV'
import { Footer } from './assets/components/footer/Footer'
import { Projects } from './assets/components/projects/Projects'

const App = () => {
	return (
		<div className='portfolio'>
			<Header />
			<CV />
			<Projects />
			<Footer />
		</div>
	)
}

export { App }
