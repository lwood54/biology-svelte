<script lang="ts">
  import Nav from "../components/UI/Nav.svelte";

  /////// next 2 lines only used to prevent warnings in console and VS Code
  export let segment;
  segment = !segment;
  //////
</script>

<Nav />

<main>
  <slot />
</main>

<style>
  main {
    /* position: relative; */
    /* max-width: 56em; */
    background-color: white;
    /* padding: 2em; */
    /* margin: 0 auto; */
    box-sizing: border-box;
  }
</style>
