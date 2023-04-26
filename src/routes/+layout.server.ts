export const load = async ({ fetch }) => {
	const response = await fetch(`/api/docs`);
	const sections = await response.json();

	return {
		sections
	};
};
