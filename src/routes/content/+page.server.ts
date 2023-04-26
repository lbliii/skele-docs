export const load = async ({ fetch, url }) => {
	const response = await fetch(`/api/docs`);
	const posts = await response.json();

	return {
		posts,
		url
	};
};
