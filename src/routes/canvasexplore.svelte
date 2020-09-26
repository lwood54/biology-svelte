<script>
	import { onMount } from "svelte";

	let canvas;
	let inc = 0;

	onMount(() => {
		// possibly pre-render with sapper
		const ctx = canvas.getContext("2d");
		ctx.fillStyle = "green";
		setInterval(() => {
			console.log("inc: ", inc);
			ctx.fillRect(10, 20, 150, 100);
			inc += 10;
		}, 1000);
	});

	// setInterval(() => {
	// 	inc = inc + 10;
	// 	const ctx = canvas.getContext("2d");
	// 	ctx.fillRect(10, 10, 150, 100);
	// }, 1000);
</script>

<style>
	canvas {
		/* width: 400px;
		height: 400px; */
		background-color: #666;
	}
</style>

<canvas bind:this={canvas} width={400} height={400} />
