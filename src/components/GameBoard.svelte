<script>
	import Content from "../routes/content.svelte";

	let mouseDown = false;

	export let game;

	const dragItem = (e) => {
		e.dataTransfer.setData("text", e.target.id);
	};

	const dropItem = (e) => {
		// define pieces container to allow drop of item back into original spot
		let isPiecesContainer = e.target.classList.contains("pieces-container");
		let dragItemId = e.dataTransfer.getData("text");
		let dragItem = document.getElementById(dragItemId);
		// if target to drop in is empty or the target is the pices container, you can drop item in
		if (!e.target.firstChild || isPiecesContainer) {
			if (!isPiecesContainer) {
				dragItem.style.position = "static";
				if (
					e.target.parentNode.classList.contains("c1") ||
					e.target.parentNode.classList.contains("c3") ||
					e.target.parentNode.classList.contains("c5")
				) {
					console.log("changing dragItem background");
					dragItem.style.backgroundColor = "transparent";
					dragItem.style.color = "#77bc43";
				} else if (e.target.parentNode.classList.contains("c2") || e.target.parentNode.classList.contains("c4")) {
					dragItem.style.backgroundColor = "transparent";
					dragItem.style.color = "#0d223f";
				}
			} else if (isPiecesContainer) {
				dragItem.style.position = "absolute";
				dragItem.style.backgroundColor = "rgb(115, 167, 167)";
				dragItem.style.color = "rgb(15, 21, 21)";
			}
			e.preventDefault();
			e.target.appendChild(dragItem);
		}
	};

	const allowDrop = (e) => {
		e.preventDefault();
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
	* {
		font-family: "Poppins", sans-serif;
	}
	.game-page {
		height: 650px;
		width: 100%;
		min-width: 800px;
		max-width: 1500px;
		margin: auto;
		/* margin: 0; */
		/* background-color: tomato; */
		box-sizing: border-box;
	}
	.pieces-container {
		display: flex;
		justify-content: space-evenly;
		border: 1px solid slategray;
		position: absolute;
		/* position: absolute;
		bottom: 0;
		left: 0; */
		height: 200px;
		width: 20%;
		padding: 1rem;
		background-color: rgb(177, 177, 181);
		box-sizing: border-box;
		margin: 0;
	}

	.pieces {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: top;
		height: 165px;
		width: 90%;
		position: absolute;
		/* text-overflow: ellipsis; */ /* ellipsis only works with fixed pixel widths*/
		/* overflow: hidden; */
		overflow: auto;
		padding: 2.5px;
		background-color: rgb(115, 167, 167);
		color: rgb(15, 21, 21);
		font-weight: bold;
		line-height: 1.15rem;
	}
	.target-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		flex-wrap: wrap;
		box-sizing: border-box;
		margin: 0;
	}

	.target {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 175px;
		width: 100%;
		padding: 5px;
		margin: 0;
		border-radius: 1px;
		box-sizing: border-box;
	}

	.column {
		width: 19%;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-content: center;
		text-align: center;
		margin: 0 0.25rem;
		margin: 0;
		box-sizing: border-box;
	}

	.c1 .target,
	.c3 .target,
	.c5 .target {
		background-color: #0d223f;
		color: #77bc43;
	}
	.c2 .target,
	.c4 .target {
		background-color: #77bc43;
		color: #0d223f;
	}

	.colHeading {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		height: auto;
		margin: 0;
		font-size: 1.25rem;
		font-weight: bold;
		/* padding: 1rem; */
		/* padding-bottom: 0; */
		/* border: 1px solid red; */
	}

	.c1 .colHeading,
	.c3 .colHeading,
	.c5 .colHeading {
		background-color: #77bc43;
	}

	.c2 .colHeading,
	.c4 .colHeading {
		background-color: #0d223f;
		color: #77bc43;
	}
</style>

<!-- <svelte:window on:mousemove={handleMouseMove} /> -->

<div class="game-page" on:drop={dropItem} on:dragover={allowDrop}>
	<div class="target-container">
		<div class="column c1">
			<h3 class="colHeading">{game.column1Heading}</h3>
			<div id="t1" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t2" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t3" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c2">
			<h3 class="colHeading">{game.column2Heading}</h3>
			<div id="t4" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t5" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t6" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c3">
			<h3 class="colHeading">{game.column2Heading}</h3>
			<div id="t7" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t8" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t9" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c4">
			<h3 class="colHeading">{game.column2Heading}</h3>
			<div id="t10" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t11" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t12" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c5">
			<h3 class="colHeading">{game.column2Heading}</h3>
			<div id="t13" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t14" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t15" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
	</div>
	<div class="pieces-container" on:drop={dropItem} on:dragover={allowDrop}>
		<div id="p1" class="pieces" draggable="true" on:dragstart={dragItem}>
			Draggable Item 1 - more stuff and stuff and stuff and stuff and stuff Draggable Item 1 - more stuff and stuff and stuff and stuff and
		</div>
		<div id="p2" class="pieces" draggable="true" on:dragstart={dragItem}>
			Draggable Item 2 - things and things and things things and things and things things and things and things things and things and things
			things and things and things things and things and things things and things and things things and things and things
		</div>
	</div>
</div>
