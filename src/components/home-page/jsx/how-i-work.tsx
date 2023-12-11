import classNames from 'classnames';
import React from 'react';

const workflow = [ {
	id: 1,
	number: '01',
	title: 'First Meeting', 
}, {
	id: 2,
	number: '02',
	title: 'Planning', 
}, {
	id: 3,
	number: '03',
	title: 'Design', 
}, {
	id: 4,
	number: '04',
	title: 'Development', 
}, {
	id: 5,
	number: '05',
	title: 'Testing', 
}, {
	id: 6,
	number: '06',
	title: 'Deployment', 
} ];


const HowIWork = () => {
	const span = classNames({
		'font-numbers': true,
		'text-black': true,
		'text-5xl': true,
	});

	const paragraph = classNames({
		uppercase: true,
		'font-semibold': true,
		'text-text': true,
		'text-3xl': true,
		'text-body': true,
		
	});
	return (
		<section className="flex w-full justify-start py-16">
			<div className="flex flex-col items-center  min-w-[50%] gap-4">
				<div className="text-4xl font-title text-text capitalize font-bold">How i work</div>
				<div>
					<img
						alt="arrow"
						src="/images/svg/arrow_break_left.svg"
					/>
				</div>
			</div>

			<div className="w-full divide-y-2 divide-title">
				{ workflow.map((item, i) => (
					<div
						key={ item.id }
						className={ classNames('flex justify-start items-center gap-16 pt-8  pb-8', { '!pt-0': i === 0 }) }
					>
						<span className={ span }>{ item.number }</span>
						<h3 className={ paragraph }>{ item.title }</h3>
					</div>
				)) }
			</div>
		</section>
	);
};

export default HowIWork;