<script context="module" lang="ts">
  export async function preload(page, session) {
    const { dnd_unit } = page.params;
    const res = await this.fetch(`data/${dnd_unit}.json`);
    const dnd_content = await res.json();
    return { dnd_content };
  }
</script>

<script>
  import DnD from "../../components/DnDGame/DnD.svelte";
  export let dnd_content; // this gets defined in script module above
</script>

<svelte:head>
  <title>{dnd_content.title}</title>
</svelte:head>

<DnD {dnd_content} />
