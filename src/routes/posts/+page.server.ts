import type { PageServerLoad } from './$types';
import { allPosts } from '../../utils/db';

export const load = (async () => {
	return allPosts();
}) satisfies PageServerLoad;
