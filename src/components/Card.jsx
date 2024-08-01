import brandRecognition from '../assets/icon-brand-recognition.svg'
const Card = () => {
	return (
		<>
			<div className='text-center md:text-left bg-white py-4 px-6 rounded w-96 flex flex-col'>
				<img
					src={brandRecognition}
					alt=''
					className=' bg-darkViolet w-20 p-4 rounded-full '
				/>
				<h3>Brand Recognition</h3>
				<p className='text-grayishViolet'>
					Boost your brand recognition with each click. Generic links don't mean
					a thing. Branded links help instil confidence in your content.
				</p>
			</div>
		</>
	)
}

export default Card
