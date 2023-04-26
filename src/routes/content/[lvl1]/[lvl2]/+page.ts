// src/routes/content/[lvl1]/[lvl2]/+page.js
export async function load({ params }) {

	const post = await import(`../../../../../content/${params.lvl1}/${params.lvl2}`);
	const { title, date, categories } = post.metadata;
	const Content = post.default;


	return {
		Content,
		title,
		date,
        categories

	};
}
