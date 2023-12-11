import type { PortableTextBlock } from 'sanity';

export type project = {
	_id: string;
	_createdAt: string;
	title: string;
	subTitle: string;
	slug: string;
	image: string;
	alt: string;
	url: string;
	position: string;
	titlePosition: string;
	releaseDate: Date;
	content: PortableTextBlock[];
}