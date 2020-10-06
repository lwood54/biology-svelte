<script>
	import { totalCorrect, totalWrong, round1Correct, round1Wrong, round2Correct, round2Wrong, firstLoad } from "../stores/dnd_game_store";
	import GameBoard from "./GameBoard.svelte";
	import { fade, fly } from "svelte/transition";
	import GameOver from "./GameOver.svelte";

	export let dnd_content;

	$: updatedRound = 1;
	const updateRound = (e) => {
		updatedRound = e.detail;
	};
</script>

{#if updatedRound === 1}
	<div in:fade={{ duration: 300 }} out:fade={{ duration: 500 }}>
		<GameBoard
			{totalCorrect}
			{totalWrong}
			{round1Correct}
			{round1Wrong}
			{round2Correct}
			{round2Wrong}
			{firstLoad}
			title={dnd_content.title}
			colHeadings={dnd_content.dndgame1}
			pieces={dnd_content.pieces1}
			on:checkround={updateRound}
			round={1} />
	</div>
{:else if updatedRound === 2}
	<div in:fade={{ delay: 600, duration: 500 }} out:fly={{ x: 200, duration: 500 }}>
		<GameBoard
			{totalCorrect}
			{totalWrong}
			{round1Correct}
			{round1Wrong}
			{round2Correct}
			{round2Wrong}
			{firstLoad}
			title={dnd_content.title}
			colHeadings={dnd_content.dndgame2}
			pieces={dnd_content.pieces2}
			on:checkround={updateRound}
			round={2} />
	</div>
{:else if updatedRound === 3}
	<div in:fly={{ y: 200, delay: 600 }}>
		<GameOver totalCorrect={$totalCorrect} totalWrong={$totalWrong} />
	</div>
{/if}
