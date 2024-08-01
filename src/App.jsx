import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Form from './components/Form'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import Cta from './components/Cta'

function App() {
	return (
		<>
			<Nav />
			<Hero />
			<Form />
			<Statistics />
			<Cta />
			<Footer />
		</>
	)
}

export default App
