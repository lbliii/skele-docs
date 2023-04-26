
export async function load({ params, url }) {
	const post = await import(`../../../../content/${params.lvl1}`);
	const { title, date, categories } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
        categories,
		url: url.href

	};
}
