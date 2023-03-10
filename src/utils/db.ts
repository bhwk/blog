import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
const prisma = new PrismaClient();
export async function allPosts() {
	const allPosts = await prisma.post.findMany({
		where: { published: true }
	});
	return {
		allPosts: allPosts
	};
}

export async function getPost(slug: string) {
	const response = await prisma.post
		.findUniqueOrThrow({
			where: {
				slug: slug
			}
		})
		.catch(() => {
			throw error(404, { message: 'Post not found' });
		});
	return response;
}
