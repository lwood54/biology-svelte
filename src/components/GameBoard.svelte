<script>
	import Content from "../routes/content.svelte";

	let mouseDown = false;

	export let dnd_content;

	const dragItem = (e) => {
		e.dataTransfer.setData("text", e.target.id);
	};

	const dropItem = (e) => {
		// define pieces container to allow drop of item back into original spot
		let isPiecesContainer = hasClass(e.target, "pieces-container");
		// let parent = e.target.parentNode;
		let dragItemId = e.dataTransfer.getData("text");
		let dragItem = document.getElementById(dragItemId);
		// if target to drop in is empty or the target is the pices container, you can drop item in
		if (!e.target.firstChild || isPiecesContainer) {
			// if the target is not the pieces container
			if (!isPiecesContainer) {
				// setting to static position so the div will be relative to parent
				dragItem.style.position = "static";
				//
				if (
					// check if parent has the odd numbered classes to adjust font color
					hasClass(e.target, "col1") ||
					hasClass(e.target, "col3") ||
					hasClass(e.target, "col5")
				) {
					dragItem.style.backgroundColor = "transparent";
					dragItem.style.color = "#77bc43";
				} else if (hasClass(e.target, "col2") || hasClass(e.target, "col4")) {
					dragItem.style.backgroundColor = "transparent";
					dragItem.style.color = "#0d223f";
				}

				if (!checkIsMatch(e.target, dragItem)) {
					e.target.style.backgroundColor = "#bf1d1d";
					dragItem.style.color = "#e8e1e1";
				} else if (checkIsMatch(e.target, dragItem)) {
					dragItem.setAttribute("draggable", false);
				}
			} else if (isPiecesContainer) {
				// if being placed back in the pieces container, going back to absolute and resetting bkgrnd & font color
				dragItem.style.position = "absolute";
				dragItem.style.backgroundColor = "rgb(115, 167, 167)";
				dragItem.style.color = "rgb(15, 21, 21)";
			}
			// now the actual placement occurs
			e.preventDefault();
			e.target.appendChild(dragItem);
		}
	};

	const allowDrop = (e) => {
		e.preventDefault();
	};

	const checkIsMatch = (target, dragItem) => {
		if (hasClass(target, "col1") && hasClass(dragItem, "col1")) {
			return true;
		} else if (hasClass(target, "col2") && hasClass(dragItem, "col2")) {
			return true;
		} else if (hasClass(target, "col3") && hasClass(dragItem, "col3")) {
			return true;
		} else if (hasClass(target, "col4") && hasClass(dragItem, "col4")) {
			return true;
		} else if (hasClass(target, "col5") && hasClass(dragItem, "col5")) {
			return true;
		} else {
			return false;
		}
	};

	const hasClass = (el, clss) => {
		return el.classList.contains(clss);
	};

	const handleMouseOver = (e) => {
		e.target.style.cursor = "grab";
	};

	const handleMouseDown = (e) => {
		e.target.style.cursor = "grabbing";
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
		min-width: 830px;
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
		padding-top: 15px;
		background-color: rgb(115, 167, 167);
		color: rgb(15, 21, 21);
		font-weight: bold;
		line-height: 1.15rem;
		border-radius: 2px;
		cursor: grab;
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
		margin: 0;
		border-radius: 2px;
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
			<h3 class="colHeading">{dnd_content.dndgame.col1Heading}</h3>
			<div id="t1" class="target col1" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t2" class="target col1" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t3" class="target col1" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c2">
			<h3 class="colHeading">{dnd_content.dndgame.col2Heading}</h3>
			<div id="t4" class="target col2" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t5" class="target col2" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t6" class="target col2" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c3">
			<h3 class="colHeading">{dnd_content.dndgame.col3Heading}</h3>
			<div id="t7" class="target col3" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t8" class="target col3" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t9" class="target col3" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c4">
			<h3 class="colHeading">{dnd_content.dndgame.col4Heading}</h3>
			<div id="t10" class="target col4" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t11" class="target col4" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t12" class="target col4" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
		<div class="column c5">
			<h3 class="colHeading">{dnd_content.dndgame.col5Heading}</h3>
			<div id="t13" class="target col5" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t14" class="target col5" on:drop={dropItem} on:dragover={allowDrop} />
			<div id="t15" class="target col5" on:drop={dropItem} on:dragover={allowDrop} />
		</div>
	</div>

	<!-- {#each dnd_content.pieces as piece}
		<div class="pieces-container" on:drop={dropItem} on:dragover={allowDrop}>
			<div
				id={piece.id}
				class={`pieces ${piece.col}`}
				draggable="true"
				on:dragstart={dragItem}
				on:mouseover={handleMouseOver}
				on:mousedown={handleMouseDown}>
				{#if piece.definition}{piece.definition}{:else if piece.hint}{piece.hint}{:else}<img src={piece.pic} alt={piece.alt} />{/if}
			</div>
		</div>
  {/each} -->
	<div class="pieces-container" on:drop={dropItem} on:dragover={allowDrop}>
		{#each dnd_content.pieces as piece}
			{#if piece.definition}
				<div
					id={piece.id}
					class={`pieces ${piece.col}`}
					draggable="true"
					on:dragstart={dragItem}
					on:mouseover={handleMouseOver}
					on:mousedown={handleMouseDown}>
					{piece.definition}
				</div>
			{:else if piece.hint}
				<div
					id={piece.id}
					class={`pieces ${piece.col}`}
					draggable="true"
					on:dragstart={dragItem}
					on:mouseover={handleMouseOver}
					on:mousedown={handleMouseDown}>
					{piece.hint}
				</div>
			{:else}
				<img
					id={piece.id}
					class={`pieces ${piece.col}`}
					draggable="true"
					on:dragstart={dragItem}
					on:mouseover={handleMouseOver}
					on:mousedown={handleMouseDown}
					src={piece.pic}
					alt={piece.alt} />
			{/if}
		{/each}
	</div>
</div>
