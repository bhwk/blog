import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
const prisma = new PrismaClient();

export async function allPosts() {
	const allPosts = await prisma.post.findMany({
		where: { published: true },
		include: { tags: true }
	});
	allPosts.forEach(async (post) => {
		const response = await compile(post.content as string);
		post.content = response?.code as string;
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
			},
			include: {
				tags: true
			}
		})
		.catch(() => {
			throw error(404, { message: 'Post not found' });
		});
	return response;
}
