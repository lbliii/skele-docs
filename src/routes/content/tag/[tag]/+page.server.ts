export const load = async ({ fetch, params }) => {
	const { section: category } = params;
	const response = await fetch(`/api/docs`);
	const allPosts = await response.json();

	const posts = allPosts.filter((post) => post.meta.categories.includes(category));

	return {
		category,
		posts,
        params
	};
};
