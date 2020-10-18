<script>
  import { fade } from "svelte/transition";
</script>

<h1 in:fade={{ y: 200, duration: 300, delay: 500 }}>
  <a class="game-link" href="/dndgame/unit1_1">Unit 1.1 Game</a>
</h1>
<h1 in:fade={{ y: 200, duration: 300, delay: 500 }}>
  <a class="game-link" href="/dndgame/unit1_2">Unit 1.2 Game</a>
</h1>
<h1 in:fade={{ y: 200, duration: 300, delay: 500 }}>
  <a class="game-link" href="/dndgame/unit1_3">Unit 1.3 Game</a>
</h1>

<style>
  .game-link {
    text-decoration: none;
  }
</style>
