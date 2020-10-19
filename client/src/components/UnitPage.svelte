<script context="module">
  export async function preload(page, session) {
    const { unit } = page.params;
    const res = await this.fetch(`data/${unit}.json`);
    const unit_content = await res.json();
    return { unit_content };
  }
</script>

<script>
  export let unit_content;
  // sorts alphabetically so I can render paragraphs in order and only render
  // the number of paragraphs needed for the available content
  let unitItems = Object.entries(unit_content).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
</script>

<svelte:head>
  <title>{unit_content.title}</title>
</svelte:head>

<h1 class="pageTitle">{unit_content.title}</h1>

<!-- loop through array items made from json file -->
{#each unitItems as item}
  <!-- check if item is paragraph material and display paragraph content w/ image if it has one -->
  {#if item[0].indexOf('par') > -1}
    <!-- check if paragraph material contains an image and display that image -->
    {#if item[1].pic}
      <div class="parImg-container">
        <img class="parImg" src={item[1].pic.src} alt={item[1].pic.alt} />
      </div>
    {/if}
    <p class="content">{item[1].content}</p>
  {/if}
{/each}
<body>
  <slot />
</body>

<style>
  .pageTitle {
    text-align: center;
  }
  .parImg-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .parImg {
    width: 75%;
  }
  .content {
    display: flex;
  }
</style>
