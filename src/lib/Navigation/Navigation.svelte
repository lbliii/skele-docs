<script>

	export let sections

</script>

<nav class="list-nav p-4">
	<ul>
		{#each sections as {path, meta}}
			<li>
				<a href="{path}">
					{meta.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>