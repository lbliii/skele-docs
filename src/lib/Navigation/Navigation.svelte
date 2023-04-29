<script lang="ts">
  import type { Post } from '$lib/types';

  export let posts: Post[] = [];

  const nestedPosts: { [section: string]: Post[] } = {};
  posts.forEach(post => {
    const slugParts = post.slug.split('/');
    const topLevelSlug = slugParts[0];
    if (!nestedPosts[topLevelSlug]) {
      nestedPosts[topLevelSlug] = [post];
    } else {
      nestedPosts[topLevelSlug].push(post);
    }
  });

  console.log(nestedPosts);
</script>

<nav class="list-nav p-4">
  <ul>
    {#each Object.keys(nestedPosts) as section}
      <li>
        <a href="/{section}" class="">
          {section}
        </a>
        <ul>
          {#each nestedPosts[section].slice(1) as post}
            <li>
              <a href="{post.slug}" class="text-sm ml-2">
                {post.title}
              </a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</nav>
