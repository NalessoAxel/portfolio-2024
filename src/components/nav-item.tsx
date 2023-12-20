import classNames from 'classnames';
import React from 'react';

type NavProps = {
	children: React.ReactNode
	to?: string
	dataLetters: string
};


const NavItem = ({ children, to = '/', dataLetters }:NavProps) => {
	
	const link = classNames(
		'overflow-hidden h-8 px-4'
	);

	const paragraphEffect = classNames(
		'relative inline-block transition transform duration-300 text-2xl font-body text-title capitalize uppercase',
		

		//before
		'before:absolute before:top-full before:content-[attr(data-hover)] before:transform before:translate-z before:font-bold',
		

		//hover
		'hover:transform hover:-translate-y-full hover:before:underline',

		//focus
		'focus:transform focus:-translate-y-full'
	);

	return (
		<a
			className={ link }
			href={ to }
		>
			<span
				className={ paragraphEffect }
				data-hover={ dataLetters }
			>
				{ children }
			</span>
		</a>
	);
};

export default NavItem;