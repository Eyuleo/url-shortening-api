import heroIllustration from '../assets/illustration-working.svg'
const Hero = () => {
	return (
		<section className='container mx-auto p-6'>
			<div className='md:flex flex-row-reverse justify-between items-center gap-4'>
				<div>
					<img
						src={heroIllustration}
						alt='illustration of a person working on a computer'
						className='block w-full'
					/>
				</div>
				<div className='text-center md:text-left  space-y-4'>
					<h1 className='text-5xl font-bold text-veryDarkBlue'>
						More than just shorter links
					</h1>
					<p className='text-gray'>
						Build your brand's recognition and get detailed insights on how your
						links are performing.
					</p>
					<button className='bg-cyan px-6 py-2 text-white rounded-full'>
						Get Started
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
