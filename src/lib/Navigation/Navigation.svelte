<script lang="ts">

	export let pages

</script>

<nav class="list-nav p-4">
	<ul>
		{#each pages as {path, meta}}
			<li>
				<a href="{path}">
					{meta.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>