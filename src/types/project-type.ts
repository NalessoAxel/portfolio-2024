import { PortableTextBlock } from 'sanity';

export type project = {
	_id: string;
	_createdAt: string;
	title: string;
	slug: string;
	image: string;
	alt: string;
	url: string;
	position: string;
	releaseDate: Date;
	content: PortableTextBlock[];
}