<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div in:fade={{ delay: 500, duration: 500 }}>
  <h1>Content</h1>
</div>

<style>
</style>
