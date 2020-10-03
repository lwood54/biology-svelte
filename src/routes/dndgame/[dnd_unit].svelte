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

	export let dnd_content;

	$: round = 1;

	const checkRoundStatus = (roundCmoplete) => {};
</script>

<GameBoard colHeadings={dnd_content.dndgame1} pieces={dnd_content.pieces1} on:checkround={checkRoundStatus} round={1} />

<GameBoard colHeadings={dnd_content.dndgame2} pieces={dnd_content.pieces2} on:checkround={checkRoundStatus} round={2} />
