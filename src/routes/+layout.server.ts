export const load = async ({ fetch }) => {
	const response = await fetch(`/api/docs`);
	const pages = await response.json();

	return {
		pages
	};
};
