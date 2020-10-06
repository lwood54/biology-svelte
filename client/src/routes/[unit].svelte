<script context="module">
	export async function preload(page, session) {
		const { unit } = page.params;
		const res = await this.fetch(`data/${unit}.json`);
		const unit_content = await res.json();
		return { unit_content };
	}
</script>

<script>
	import Unitpage from "../components/UnitPage.svelte";
	export let unit_content;
</script>

<Unitpage {unit_content} />
