export const load = async ({ fetch }) => {
	const response = await fetch(`/api/docs`);
	const posts = await response.json();

	return {
		posts
	};
};
