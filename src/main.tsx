import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CVPage } from './assets/screens/CvPage/CVPage.tsx'
import { HomePage } from './assets/screens/HomePage/HomePage.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/cv' element={<CVPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
