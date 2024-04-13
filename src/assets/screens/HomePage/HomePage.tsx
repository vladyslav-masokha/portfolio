import { Header } from '../../components/Header/Header'
import { FeedBack } from '../../components/feedback/FeedBack'
import { Footer } from '../../components/footer/Footer'
import { Projects } from '../../components/projects/Projects'
import { Reviews } from '../../components/reviews/Reviews'
import { TitleBlock } from '../../components/titleBlock/TitleBlock'

const HomePage = () => {
	return (
		<>
			<Header />
			<TitleBlock />
			<Projects />
			<Reviews />
			<FeedBack />
			<Footer />
		</>
	)
}

export { HomePage }
