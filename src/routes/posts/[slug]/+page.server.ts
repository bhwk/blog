// import type { Load } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';

const MOCK_RESPONSE_FROM_API = `
---
title: test
---
## Lorem

Lorem is currently extended with the following plugins.
Instructions on how to use them in your application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md](Link) |
| Medium | [plugins/medium/README.md](Link) |
| Google Analytics | [plugins/googleanalytics/README.md](Link) |
`;

export const load = (async () => {
	const response = MOCK_RESPONSE_FROM_API; // Get data with eg. `fetch`
	const compiledResponse = await compile(response);

	return {
		post: {
			content: compiledResponse?.code,
			details: compiledResponse?.data?.fm as { title: string }
		}
	};
}) satisfies PageServerLoad;
