<script>
  export let data

  const { category, posts } = data

  console.log(data)
</script>

<h1>{category}</h1>


{#if posts.length}

      {#each posts as {path, meta}}
        <li>
          <a href="{path}">
            {meta.title}
          </a>
        </li>
      {/each}

{/if}