export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/content/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	console.log("stuff: ", iterablePostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path;


			return {
				meta: metadata,
				path: postPath,

			};
		})
	);

	return allPosts;
};
