import classNames from 'classnames';
import React from 'react';

type NavProps = {
	children: React.ReactNode
	to?: string
	dataLetters: string
};


const NavItem = ({ children, to = '/', dataLetters }:NavProps) => {
	
	const link = classNames({
		'overflow-hidden': true,
		'h-8': true,
		'px-4': true,
	});

	const paragraphEffect = classNames({
		relative: true,
		'inline-block': true,
		transition: true,
		transform: true,
		'duration-300': true,
		'text-2xl': true,
		'font-body': true,
		'text-title': true,
		'capitalize': true,

		//before
		'before:absolute': true,
		'before:top-full': true,
		'before:content-[attr(data-hover)]': true,
		'before:transform': true,
		'before:translate-z': true,
		'before:font-bold': true,
		uppercase: true,

		//hover
		'hover:transform': true,
		'hover:-translate-y-full': true,
		'hover:before:underline': true,

		//focus
		'focus:transform': true,
		'focus:-translate-y-full': true,
	});

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