<script>
export let data
</script>

<h1>Content</h1>

<slot/>
  
<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>

