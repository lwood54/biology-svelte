<script>
	import { onMount } from "svelte";

	let canvas;
	let incX = 0;
	let incY = 0;
	let yDir = 1;
	let xDir = 1;
	let ctx;

	onMount(() => {
		// TODO: possibly pre-render with sapper as an option
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "#52cc89";
	});

	$: if (ctx) {
		if (ctx.fillStyle === "#52cc89") {
			ctx.fillStyle = "#30aac2";
		} else {
			ctx.fillStyle = "#52cc89";
		}
		ctx.fillRect(incX, incY, 150, 100);
	}

	setInterval(() => {
		if (ctx) {
			ctx.clearRect(incX, incY, 150, 100);
			moveX();
			moveY();
		}
	}, 95);

	const moveY = () => {
		if (incY >= canvas.height - 100) {
			yDir = -1;
		} else if (incY <= 0) {
			yDir = 1;
		}
		incY += 10 * yDir;
	};

	const moveX = () => {
		if (incX >= canvas.width - 150) {
			xDir = -1;
		} else if (incX <= 0) {
			xDir = 1;
		}
		incX += 10 * xDir;
	};
</script>

<style>
	canvas {
		/* width: 400px;
		height: 400px; */
		background-color: #666;
	}
</style>

<canvas bind:this={canvas} width={400} height={400} />
