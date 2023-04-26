// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`./content/${params.slug}.md`);
	const { title, date, categories } = post.metadata;
	const Content = post.default;

	console.log("DEFAULT: ", post.default)

	return {
		Content,
		title,
		date,
        categories

	};
}
