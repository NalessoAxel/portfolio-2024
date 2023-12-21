import React, { useState } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
// import { opacity } from 'src/animation';

const paragraph = classNames({
	'text-2xl': true,
	'font-body': true,
	'text-title': true,
});

const links = [
	{
		slug: 'works',
		title: 'Works',
	},
	{
		slug: 'about',
		title: 'About',
	},
	{
		slug: 'contact',
		title: 'Contact',
	},
];

const strToUrl = (str: string) => `/${str.replace(' ', '')}`;

const SiteNavigation = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	console.log(isActive);
	const opacity = {
		open: { opacity: 1 },
		closed: { opacity: 0 }
	};

	const setActiveFunction = () => {
		setIsActive((prevState) => !prevState);
	};

	return (
		<div className='flex justify-between items-center space-x-4 my-8 container fixed top-0 right-0 left-0 z-50'>
			{/* <ul className="relative flex justify-between min-w-[50%]">
			<li className="flex items-center p-4 hover:cursor-pointer hover:bg-white hover:rounded-full hover:transition-all  hover:ease-in-out hover:delay-150 hover:duration-600">
				<a
					href="/"
				>
					<Image
						alt="logo"
						
						width={48}
						height={48}
						src="/images/svg/Logo_36x36.svg"
					/>
				</a>
			</li>

			<button
				type="button"
			>Menu
			</button>
			
			<button type="button">Close</button>

			

			{ links.map((link) => (
				<li
					className="flex items-center gap-2"
				>
					<NavItem
						dataLetters={ link.title }
						to={ strToUrl(link.slug) }
					>
						{ link.title }
					</NavItem>
				</li>
			)) }
		</ul>  */}

			<div className='hover:bg-white p-4 hover:rounded-full transition-all ease-in delay-150 duration-600'>
				<a href='/'>
					<img alt='logo' width={48} height={48} src='/images/svg/Logo_36x36.svg' />
				</a>
			</div>

			<button className='flex gap-8 items-center cursor-pointer' onClick={setActiveFunction}>
				<div
					className={`w-[30px] relative transition-all before:content-[''] before:relative before:block before:h-[2px] before:w-full before:bg-title before:top-[4px] after:content-[''] after:relative after:block after:h-[2px] after:w-full after:bg-title after:top-[-4px] 
						
					`}
					style={{ transition: 'all 1s cubic-bezier(0.76, 0, 0.24, 1)' }}
				/>
				<div className='relative flex items-center'>
					<motion.p variants={opacity} animate={isActive ? 'closed' : 'open'} className='uppercase text-2xl font-body font-medium text-title'>
						Menu
					</motion.p>

					<motion.p variants={opacity} animate={!isActive ? 'closed' : 'open'} className='absolute uppercase text-2xl font-body font-medium text-title opacity-0'>
						Close
					</motion.p>
				</div>
			</button>

			<div className='flex items-center gap-2'>
				<p className={paragraph}>Freelance</p>
				<p className={paragraph}>Brussels, Be</p>
			</div>
		</div>
	);
};

export default SiteNavigation;
