<script>
	import { onMount } from "svelte";

	let canvas;
	let obj1 = { leftX: 0, topY: 0, initW: 150, initH: 100, yDir: 1, xDir: 1, fillColor: "#52cc89" };
	let obj2 = { leftX: 200, topY: 300, initW: 100, initH: 75, yDir: 1, xDir: 1, fillColor: "teal" };
	// let obj3 = { leftX: 400, topY: 100, initW: 50, initH: 75, yDir: 1, xDir: 1, fillColor: "teal" };
	// let leftX = 0;
	// let topY = 0;
	// let yDir = 1;
	// let xDir = 1;
	let ctx1;
	let ctx2;

	onMount(() => {
		// TODO: possibly pre-render with sapper as an option
		ctx1 = canvas.getContext("2d");
		ctx2 = canvas.getContext("2d");
	});

	$: if (ctx1) {
		// console.log("current origin: ", obj1.leftX, obj1.topY);
		if (ctx1.fillStyle === "#52cc89") {
			ctx1.fillStyle = "#30aac2";
		} else {
			ctx1.fillStyle = "#52cc89";
		}
		ctx1.fillRect(obj1.leftX, obj1.topY, obj1.initW, obj1.initH);
		// ctx1.fillStyle = obj3.fillColor;
		// ctx1.fillRect(obj3.leftX, obj3.topY, obj3.initW, obj3.initH);
	}

	$: if (ctx2) {
		ctx2.fillStyle = obj2.fillColor;
		ctx2.fillRect(obj2.leftX, obj2.topY, obj2.initW, obj2.initH);
	}

	setInterval(() => {
		if (ctx1) {
			ctx1.clearRect(obj1.leftX, obj1.topY, obj1.initW, obj1.initH);
			moveX("obj1");
			moveY("obj1");
		}
	}, 95);

	setInterval(() => {
		if (ctx2) {
			ctx2.clearRect(obj2.leftX, obj2.topY, obj2.initW, obj2.initH);
			moveX("obj2");
			moveY("obj2");
		}
	}, 200);

	const moveY = (obj) => {
		if (obj === "obj1") {
			// check for collision with other object, sort of works, though at scale this would be really inefficient, look for better way
			// that checking each possibility for each collision.
			// if (obj1.topY >= canvas.height - obj1.initH || (obj1.topY + obj1.initH >= obj2.topY && obj1.leftX >= obj2.leftX)) {
			if (obj1.topY >= canvas.height - obj1.initH) {
				obj1.yDir = -1;
			} else if (obj1.topY <= 0) {
				obj1.yDir = 1;
			}
			obj1.topY += 10 * obj1.yDir;
		}

		if (obj === "obj2") {
			if (obj2.topY >= canvas.height - obj2.initH) {
				obj2.yDir = -1;
			} else if (obj2.topY <= 0) {
				obj2.yDir = 1;
			}
			obj2.topY += 10 * obj2.yDir;
		}
	};

	const moveX = (obj) => {
		if (obj === "obj1") {
			if (obj1.leftX >= canvas.width - obj1.initW) {
				obj1.xDir = -1;
			} else if (obj1.leftX <= 0) {
				obj1.xDir = 1;
			}
			obj1.leftX += 10 * obj1.xDir;
		}

		if (obj === "obj2") {
			if (obj2.leftX >= canvas.width - obj2.initW) {
				obj2.xDir = -1;
			} else if (obj2.leftX <= 0) {
				obj2.xDir = 1;
			}
			obj2.leftX += 10 * obj2.xDir;
		}
	};
</script>

<style>
	canvas {
		/* width: 400px;
		height: 400px; */
		background-color: #666;
	}
</style>

<canvas bind:this={canvas} width={800} height={800} />
