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
</script>

<GameBoard {dnd_content} />
