import Card from './Card'

const Statistics = () => {
	return (
		<section className='h-full bg-secondaryGray'>
			<div className='container mx-auto p-6'>
				<div className='text-center'>
					<h2>Advanced Statistics</h2>
					<p className='text-grayishViolet'>
						Track how your links are performing across the web with our advanced
						statistics dashboard.
					</p>
				</div>
				<div className='flex justify-center'>
					<Card />
				</div>
			</div>
		</section>
	)
}

export default Statistics
