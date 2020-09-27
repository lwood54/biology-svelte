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
			} else if (isPiecesContainer) {
				dragItem.style.position = "absolute";
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
	.game-page {
		height: 650px;
		width: 100%;
		min-width: 800px;
		max-width: 1500px;
		margin: auto;
		/* margin: 0; */
		background-color: tomato;
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
		background-color: lightgreen;
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
		padding: 2px;
		background-color: teal;
		color: whitesmoke;
	}
	.target-container {
		border: 1px solid slategray;
		background-color: moccasin;
		height: 100%;
		/* original settings: */
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
		background-color: lightblue;
		/* margin: 1rem 0; */
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

	.colHeading {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		height: 20px;
		margin: 0;
		/* padding: 1rem; */
		/* padding-bottom: 0; */
		/* border: 1px solid red; */
	}
</style>

<!-- <svelte:window on:mousemove={handleMouseMove} /> -->

<div class="game-page" on:drop={dropItem} on:dragover={allowDrop}>
	<div class="target-container">
		<div class="column">
			<h3 class="colHeading">{game.column1Heading}</h3>
			<div id="t1" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t2" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t3" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column">
			<h3 class="colHeading">{game.column2Heading}</h3>
			<div id="t4" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t5" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t6" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column">
			<h3 class="colHeading">{game.column2Heading}</h3>
			<div id="t7" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t8" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t9" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column">
			<h3 class="colHeading">{game.column2Heading}</h3>
			<div id="t10" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t11" class="target" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t12" class="target" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column">
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
