import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		let post = null;
		try {
			post = await import(`../../../content/${params.lvl0}.md`);
		} catch {}

		if (!post) {
			post = await import(`../../../content/${params.lvl0}/_index.md`);
		}

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.lvl0}`);
	}
}
