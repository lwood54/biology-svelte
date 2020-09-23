<script>
	let selectedItemLocation = {
		x: 200,
		y: 200,
	};

	const dragItem = (e) => {
		e.dataTransfer.setData("text", e.target.id);
	};

	const dropItem = (e) => {
		let isPiecesContainer = e.target.classList.contains("pieces-container");
		if (!e.target.firstChild || isPiecesContainer) {
			e.preventDefault();
			let dragItemId = e.dataTransfer.getData("text");
			e.target.appendChild(document.getElementById(dragItemId));
		}
	};

	const allowDrop = (e) => {
		e.preventDefault();
	};
</script>

<style>
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

<h1>Game Board</h1>
<div class="target-container">
	<div id="t1" class="target" on:drop={dropItem} on:dragover={allowDrop} />
	<div id="t2" class="target" on:drop={dropItem} on:dragover={allowDrop} />
</div>
<div class="pieces-container" on:drop={dropItem} on:dragover={allowDrop}>
	<div id="p1" class="pieces" draggable="true" on:dragstart={dragItem}>Draggable Item 1</div>
	<div id="p2" class="pieces" draggable="true" on:dragstart={dragItem}>Draggable Item 2</div>
</div>
