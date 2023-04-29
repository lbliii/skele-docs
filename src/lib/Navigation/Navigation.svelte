<script lang="ts">
  import type { Post } from '$lib/types';

  export let posts: Post[] = [];

  const nestedPosts: { [section: string]: Post[] } = {};
  posts.forEach(post => {
    const slugParts = post.slug.split('/');
    const lvl0 = slugParts[0];
    if (!nestedPosts[lvl0]) {
      nestedPosts[lvl0] = [post];
    } else {
      nestedPosts[lvl0].push(post); 
    }
  });

  Object.keys(nestedPosts).forEach(section => {
    if (nestedPosts[section].length > 2) {
      nestedPosts[section].shift();
      nestedPosts[section].sort((a, b) => a.weight - b.weight);
    }
  });

  console.log(nestedPosts)

</script>

<nav class="list-nav p-4">
  <ul>
    {#each Object.keys(nestedPosts) as section}
      <li>
        <a href="/{section}" class="">
          {section}
        </a>
        {#if nestedPosts[section].length > 1}
          <ul>
            {#each nestedPosts[section].slice(0) as {slug, title}}
              <li>
                <a href="/{slug}" class="text-sm ml-2">
                  {title}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
