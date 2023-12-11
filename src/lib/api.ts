import { useSanityClient } from "@sanity/astro";
import groq from 'groq';


import type { project } from './../types/project-type';


export async function getProjects (): Promise<project[]> {
	
	return  useSanityClient().fetch(
		groq`*[_type == "project"]{
			_id,
			_createdAt,
			title,
			"slug": slug.current,
			"image": image.asset->url,
			"alt": image.alt,
			position,
			url,
			releaseDate,
			content
		}`
	);
}

export async function getProject(slug:string):Promise<project> {
	
	return useSanityClient().fetch(
		groq`*[_type == "project" && slug.current == $slug][0] {
			_id,
			_createdAt,
			title,
			"slug": slug.current,
			"image": image.asset->url,
			"alt": image.alt,
			position,
			url,
			releaseDate,
			content
		}`,
		{ slug }
	);

}