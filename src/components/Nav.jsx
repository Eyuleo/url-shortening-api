import { useState } from 'react'
import logo from '../assets/logo.svg'
const Nav = () => {
	const [open, setOpen] = useState(false)
	return (
		<nav className='relative container mx-auto p-6'>
			<div className='flex items-center justify-between'>
				<div>
					<img src={logo} alt='shortly logo' />
				</div>
				<div className='hidden md:flex space-x-6 text-grayishViolet'>
					<a href='#' className='hover:text-black'>
						Features
					</a>
					<a href='#' className='hover:text-black'>
						Pricing
					</a>
					<a href='#' className='hover:text-black'>
						Resources
					</a>
				</div>
				<div className='hidden md:flex items-center space-x-3'>
					<a href='#' className='text-grayishViolet hover:text-black'>
						Login
					</a>
					<a
						href='#'
						className='px-6 py-2 text-white rounded-full bg-cyan
                     hover:bg-transparent hover:text-grayishViolet hover:ring-1 hover:ring-cyan'
					>
						Sign Up
					</a>
				</div>
				<button
					id='menu-btn'
					className='block md:hidden focus:outline-none transition-all duration-[0.25s] relative'
					onClick={() => setOpen(!open)}
				>
					{!open ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 14.1213L7.56066 18.5607L6.43934 17.4393L10.8787 13L6.43934 8.56066L7.56066 7.43934L12 12.8787L16.4393 7.43934L17.5607 8.56066L13.1213 13L17.5607 17.4393L16.4393 18.5607L12 14.1213Z'
								fill='currentColor'
							/>
						</svg>
					)}
				</button>
			</div>
			<div className='md:hidden'>
				<div
					className={`absolute ${
						open ? 'flex' : 'hidden'
					} flex-col items-center self-end  py-8 mt-10 space-y-6 bg-darkViolet sm:w-auto sm:self-center left-6 right-6 rounded`}
				>
					<a href='#' className='text-white hover:text-cyan'>
						Features
					</a>
					<a href='#' className='text-white hover:text-cyan'>
						Pricing
					</a>
					<a href='#' className='text-white hover:text-cyan'>
						Resources
					</a>
					<div className='flex flex-col items-center space-y-4'>
						<a href='#' className='text-white hover:text-cyan'>
							Login
						</a>
						<a
							href='#'
							className='px-6 py-2 text-white rounded-full bg-cyan
					 hover:bg-transparent hover:ring-1 hover:ring-cyan'
						>
							Sign Up
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
