
import React from 'react';

import { siteConfig } from './../config/site';

export const SiteFooter = () => {
	return (
		<footer className="container flex justify-between items-center ">
			<a
				className="font-body text-base leading-6 text-text "
				href="/"
			>
				{ siteConfig.name } &copy; { new Date().getFullYear() }
			</a>

			<nav
				aria-label="Footer"
				className="flex justify-between items-center gap-32"
			>
				{ siteConfig.footer.map((item) => (
					<div
						key={ item.name }
						className="font-body text-base leading-6 text-text"
					>
						<a
							className="text-sm leading-6"
							href={ item.href }
						>
							{ item.name }
						</a>
					</div>
				)) }
			</nav>
			
		</footer>
	);
};