import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import type { Post } from '@prisma/client';
import { compile } from 'mdsvex';

const prisma = new PrismaClient();

export const load = (async ({ params }) => {
	const response = await prisma.post.findMany({
		where: {
			title: {
				equals: params.slug
			}
		}
	});
	console.log(response[0]);
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
				title: params.slug
			}
		};
	}
}) satisfies PageServerLoad;
