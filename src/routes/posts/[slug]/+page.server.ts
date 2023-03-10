import type { PageServerLoad } from './$types';
import * as db from '../../../utils/db';
import { compile } from 'mdsvex';

export const load = (async ({ params }) => {
	const response = await db.getPost(params.slug);
	const compiledResponse = await compile(response.content as string);

	return {
		post: {
			content: compiledResponse?.code as string,
			title: response.title,
			publishedAt: response.publishedAt
		}
	};
}) satisfies PageServerLoad;
