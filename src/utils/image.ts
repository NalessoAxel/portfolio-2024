import { useSanityClient } from '@sanity/astro';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';

const builder = imageUrlBuilder(useSanityClient());

export function urlFor(source: Image) {
	return builder.image(source);
}
