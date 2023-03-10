import type { Tag } from '@prisma/client';
export function getTags(tags: Tag[]) {
	return tags.map(function (tag) {
		return tag['name'];
	});
}
