import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';

const prisma = new PrismaClient();

export const load = (async ({ params }) => {
	const response = await prisma.post.findMany({
		where: {
			slug: {
				equals: params.slug
			}
		}
	});
	if (response.length == 0) {
		throw error(404, {
			message: 'Not found'
		});
	}

	if (typeof response[0].content === 'string') {
		const compiledResponse = await compile(response[0].content as string);
		if (compiledResponse) {
			if (compiledResponse.code) {
				const content = compiledResponse.code;
			}
		}

		return {
			post: {
				content: compiledResponse?.code,
				title: response[0].title
			}
		};
	}
}) satisfies PageServerLoad;
