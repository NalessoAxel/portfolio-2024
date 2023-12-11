import classNames from 'classnames';
import React from 'react';

const RecentTitle = () => {
	const heading3 = classNames({
		'font-semibold': true,
		'font-title': true,
		'text-5xl': true,
		'text-text': true,
	});

	return (
		<section className="pb-16">
			<div>
				<div className="flex flex-col items-center justify-center w-full gap-4">
					<h3 className={ heading3 }>Recent</h3>

					<h3 className={ heading3 }>Work</h3>

					<img
						alt="arrow"
						src="./images/svg/Arrow_recent-work.svg"
					/>
				</div>
			</div>
		</section>
	);
};

export default RecentTitle;