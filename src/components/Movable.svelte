<script>
	let mouseDown = false;

	const handleMouseMove = (e) => {
		if (mouseDown && e.target.id && e.target.classList.contains("movable")) {
			let mItem = document.getElementById(e.target.id);
			mItem.style.backgroundColor = "blue";
			// mItem.style.top = e.clientY - mItem.offsetHeight * 0.775 + "px";
			// mItem.style.left = e.clientX - mItem.offsetWidth * 1.424 + "px";
			mItem.style.top = e.clientY - 155 + "px";
			mItem.style.left = e.clientX - 285 + "px";
		}
	};

	const handleMouseDown = (e) => {
		mouseDown = true;
	};

	const handleMouseUp = (e) => {
		mouseDown = false;
	};
</script>

<style>
	.movable {
		height: 200px;
		width: 200px;
		background-color: teal;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		cursor: move;
	}

	.not-movable {
		height: 100px;
		width: 100px;
		background-color: turquoise;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.movable-container {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid lightgray;
		height: 400px;
		width: 80%;
	}

	#moveItem3 {
		height: 100px;
		width: 100px;
		background-color: turquoise;
	}
</style>

<svelte:window on:mousemove={handleMouseMove} />

<div class="movable-container">
	<div class="movable" id="moveItem1" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>Movable Item 1</div>
	<div class="movable" id="moveItem2" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>Movable Item 2</div>
	<!-- <div class="movable" id="moveItem3" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>Not Movable Item</div> -->
</div>
