<script lang="ts">
  export let data

  let title, date, Content, url;

  $: {
    ({ title, date, Content, url } = data);
    console.log(data);
  }

</script>

<article>
  <h1>{title}</h1>
  <p>Published: {date}</p>
  <svelte:component this={Content} />
</article>


<!-- {#if data.categories.length}
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
{/if} -->