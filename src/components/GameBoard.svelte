<script>
	let mouseDown = false;

	const handleMouseMove = (e) => {
		if (mouseDown && e.target.id && e.target.classList.contains("pieces")) {
			console.log("running");
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
		let mItem = document.getElementById(e.target.id);
		mouseDown = false;
		mItem.style.top = e.clientY - 155 + "px";
		mItem.style.left = e.clientX - 285 + "px";
	};

	const dragItem = (e) => {
		e.dataTransfer.setData("text", e.target.id);
	};

	const dropItem = (e) => {
		// define pieces container to allow drop of item back into original spot
		let isPiecesContainer = e.target.classList.contains("pieces-container");
		let dragItemId = e.dataTransfer.getData("text");
		let dragItem = document.getElementById(dragItemId);
		if (!e.target.firstChild || isPiecesContainer) {
			e.preventDefault();
			e.target.appendChild(dragItem);
		} else {
			e.preventDefault();
			console.log("running else");
		}
	};

	const allowDrop = (e) => {
		e.preventDefault();
	};
</script>

<style>
	/* .game-page {
		border: 1px solid red;
		height: 100vh;
		width: 100vw;
	} */
	.pieces-container {
		display: flex;
		justify-content: space-evenly;
		border: 1px solid slategray;
		height: 250px;
	}

	.pieces {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 185px;
		width: 195px;
		/* top: 200px;
		left: 200px; */
		background-color: teal;
		margin: 1rem;
		color: whitesmoke;
	}
	.target-container {
		display: flex;
		justify-content: space-evenly;
		border: 1px solid slategray;
	}

	.target {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
		width: 200px;
		background-color: lightblue;
		margin: 1rem;
	}
</style>

<svelte:window on:mousemove={handleMouseMove} />

<!-- <div class="game-page" on:drop={dropItem} on:dragover={allowDrop}> -->
<h1>Game Board</h1>
<div class="target-container">
	<div id="t1" class="target" on:drop={dropItem} on:dragover={allowDrop} />
	<div id="t2" class="target" on:drop={dropItem} on:dragover={allowDrop} />
</div>
<div class="pieces-container" on:drop={dropItem} on:dragover={allowDrop}>
	<div id="p1" class="pieces" draggable="true" on:dragstart={dragItem} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>
		Draggable Item 1
	</div>
	<div id="p2" class="pieces" draggable="true" on:dragstart={dragItem} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp}>
		Draggable Item 2
	</div>
</div>
<!-- </div> -->
