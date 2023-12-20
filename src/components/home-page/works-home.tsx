import React from 'react';

import  { type project } from '../../types/project-type';
import Button from '@components/ui/button';


interface WorksHomeProps {
	projects: Array<project>;
};

const WorksHomeComp: React.FC<WorksHomeProps> = (props: WorksHomeProps) => {
	const { projects } = props;
	

	const itemsReleaseDateArr: project[] = [ ...projects ];

	const sortArr = itemsReleaseDateArr.sort((a, b) => {
		if(a.releaseDate > b.releaseDate) return 1; 
		if(a.releaseDate < b.releaseDate) return -1;
		return 0;
	});

	const reverseSortArr = sortArr.reverse();

	return (
		<div className="flex flex-col gap-16 pb-32">
			{ reverseSortArr.slice(0, 3).map((project) => (
				<div
					key={ project._id }
					className="flex h-full"
				>
					<div className="flex  w-full">
						<a
							className="flex justify-between items-center w-full"
							href={ `/works/${ project.slug }` }
							
						>
							<h1 className="text-3xl font-title text-title uppercase font-bold">{ project.title }</h1>
					
						
							<p className="text-3xl font-title text-title">{ project.position }</p>
						</a>
					</div>
					
					
				</div>
			)) }
			<div className="flex justify-center">
				<a
					href="/works"
					
				>
					<Button
						className="text-xl font-title bg-title text-white uppercase font-bold ring-2 ring-title rounded-full  p-4"
						type="button"
					>
						See All My Works
					</Button>
				</a>
			</div>
		</div>
	);
};

export default WorksHomeComp;