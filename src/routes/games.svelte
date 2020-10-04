<script>
	import { fade } from "svelte/transition";
	import { totalCorrect, totalWrong } from "../stores/dnd_game_store";
</script>

<style>
</style>

<h1 in:fade={{ y: 200, duration: 300, delay: 500 }}><a href="/dndgame/unit1_1">Unit 1.1 Game</a></h1>
