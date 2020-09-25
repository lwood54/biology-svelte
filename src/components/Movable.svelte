<script>
	let mouseDown = false;

	const handleMouseMove = (e) => {
		if (mouseDown && e.target.id) {
			let mItem = document.getElementById(e.target.id);
			mItem.style.backgroundColor = "blue";
			mItem.style.top = e.clientY - 165 + "px";
			mItem.style.left = e.clientX - 285 + "px";
			console.log("e.target.id: ", e.target.id);
			console.log("style.top: ", mItem.style.top);
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
	}
</style>

<svelte:window on:mousemove={handleMouseMove} />
<h1>Movable Divs Practice</h1>

<div class="movable" id="moveItem" on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>This will move</div>
