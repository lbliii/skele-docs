<script lang="ts">
	import type { Post } from '$lib/types';

	export let posts: Post[] = [];

</script>

<nav class="list-nav p-4">
	<ul>
		{#each posts as {slug, title}, i}

			<li >
				<a href="/{slug}">
					{title}
				</a>
			</li>
		{/each}
	</ul>
</nav>