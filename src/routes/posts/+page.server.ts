import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import type { Post } from '@prisma/client';
const prisma = new PrismaClient();

export const load = (async () => {
	return {
		allPosts: await prisma.post.findMany()
	};
}) satisfies PageServerLoad;
