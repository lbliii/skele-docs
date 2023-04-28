<script>
  export let data
  const { title, date, categories } = data
</script>

{#if data.categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each data.categories as category}
        <li>
          <a href="/content/section/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}