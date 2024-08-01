import logo from '../assets/logo-white.svg'
import instagramIcon from '../assets/icon-instagram.svg'
import facebookIcon from '../assets/icon-facebook.svg'
import pinterestIcon from '../assets/icon-pinterest.svg'
import twitterIcon from '../assets/icon-twitter.svg'
const Footer = () => {
	return (
		<section className='bg-veryDarkViolet'>
			<div className='container mx-auto p-6'>
				<div className='flex flex-col items-center md:flex-row md:justify-between'>
					<div>
						<img src={logo} alt='Shortly logo' />
					</div>
					<div className='flex flex-col text-center md:text-left md:flex-row gap-12 p-4 '>
						<div className='space-y-4'>
							<h3 className='font-bold text-white'>Features</h3>
							<ul className='text-grayishViolet space-y-4'>
								<li>
									<a href='#' className='hover:text-cyan'>
										Link Shortening
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-cyan'>
										Branded Links
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-cyan'>
										Analytics
									</a>
								</li>
							</ul>
						</div>
						<div className='space-y-4'>
							<h3 className='font-bold text-white'>Resources</h3>
							<ul className='text-grayishViolet space-y-4'>
								<li>
									<a href='#' className='hover:text-cyan'>
										Blog
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-cyan'>
										Developers
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-cyan'>
										Support
									</a>
								</li>
							</ul>
						</div>
						<div className='space-y-4'>
							<h3 className='font-bold text-white'>Company</h3>
							<ul className='text-grayishViolet space-y-4'>
								<li>
									<a href='#' className='hover:text-cyan'>
										About
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-cyan'>
										Our Team
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-cyan'>
										Carrers
									</a>
								</li>
								<li>
									<a href='#' className='hover:text-cyan'>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<a href='#'>
							<img src={facebookIcon} alt='' />
						</a>
						<a href='#'>
							<img src={twitterIcon} alt='' />
						</a>
						<a href='#'>
							<img src={pinterestIcon} alt='' />
						</a>
						<a href='#'>
							<img src={instagramIcon} alt='' />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
