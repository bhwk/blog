import type { PageServerLoad } from './$types';
import { searchTag } from '../../../utils/db';

export const load = (async ({ params }) => {
	return searchTag(params.slug);
}) satisfies PageServerLoad;
