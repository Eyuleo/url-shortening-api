const Form = () => {
	return (
		<div className='container mx-auto p-6'>
			<div id='form-container' className={`px-8 py-12 bg-darkViolet rounded`}>
				<form
					action=''
					className='flex flex-col justify-center md:flex-row gap-3'
				>
					<input
						type='text'
						name='url'
						className='px-4 py-2 placeholder:text-grayishViolet rounded w-full focus:outline-none focus:ring-1 focus:ring-cyan'
						placeholder='Shorten a link here...'
					/>
					<button className='bg-cyan text-white px-4 py-2 rounded'>
						Shorten
					</button>
				</form>
			</div>
		</div>
	)
}

export default Form
