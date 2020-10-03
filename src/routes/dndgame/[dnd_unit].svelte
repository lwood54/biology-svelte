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
	import { fade } from "svelte/transition";

	export let dnd_content;

	$: updatedRound = 1;

	const updateRound = (round) => {
		updatedRound = round;
	};
</script>

{#if updatedRound === 1}
	<div out:fade={{ duration: 500 }}>
		<GameBoard colHeadings={dnd_content.dndgame1} pieces={dnd_content.pieces1} on:checkround={updateRound} round={1} />
	</div>
{:else}
	<div in:fade={{ delay: 600, duration: 500 }}>
		<GameBoard colHeadings={dnd_content.dndgame2} pieces={dnd_content.pieces2} on:checkround={updateRound} round={2} />
	</div>
{/if}
