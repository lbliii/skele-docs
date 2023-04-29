import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/content/**/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slugParts = path.split('/').slice(2);
		let slug = slugParts.join('/').replace('.md', '');

		// If this is an _index.md file, treat it as a directory and remove the filename
		if (slug.endsWith('/_index')) {
			slug = slug.replace('/_index', '');
		} else {
			slug = slug.replace('.md', '');
		}

		let content = file.default;
		if (slug.endsWith('/')) {
			const indexFile = paths[`${path}_index.md`];
			if (indexFile && typeof indexFile === 'object' && 'default' in indexFile) {
				content = indexFile.default;
			}
		}

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug, content } as Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	try {
		const posts = await getPosts();
		return json(posts);
	} catch {
		return json({ message: 'An error occurred while fetching the posts.' }, 500);
	}
}
