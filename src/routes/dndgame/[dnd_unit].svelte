<script context="module">
	export async function preload(page, session) {
		const { dnd_unit } = page.params;
		const res = await this.fetch(`data/${dnd_unit}.json`);
		const dnd_content = await res.json();

		return { dnd_content };
	}
</script>

<script>
	import GameBoard from "../../components/GameBoard.svelte";
	import { fade, fly } from "svelte/transition";
	import GameOver from "../../components/GameOver.svelte";
	import { totalCorrect, totalWrong } from "../../stores/dnd_game_store";

	export let dnd_content;

	$: updatedRound = 1;

	const updateRound = (e) => {
		updatedRound = e.detail;
		console.log("updated round: ", updatedRound);
	};
</script>

<svelte:head>
	<title>{dnd_content.title}</title>
</svelte:head>

{#if updatedRound === 1}
	<div in:fade={{ duration: 300 }} out:fade={{ duration: 500 }}>
		<GameBoard title={dnd_content.title} colHeadings={dnd_content.dndgame1} pieces={dnd_content.pieces1} on:checkround={updateRound} round={1} />
	</div>
{:else if updatedRound === 2}
	<div in:fade={{ delay: 600, duration: 500 }} out:fly={{ x: 200, duration: 500 }}>
		<GameBoard title={dnd_content.title} colHeadings={dnd_content.dndgame2} pieces={dnd_content.pieces2} on:checkround={updateRound} round={2} />
	</div>
{:else if updatedRound === 3}
	<div in:fly={{ y: 200, delay: 600 }}>
		<GameOver totalCorrect={$totalCorrect} totalWrong={$totalWrong} />
	</div>
{/if}
