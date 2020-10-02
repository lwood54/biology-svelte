<script>
	import Content from "../routes/content.svelte";
	import { scoreCorrectCount, scoreWrongCount } from "../stores/dnd_game_store";

	let mouseDown = false;

	export let dnd_content;

	const dragItem = (e) => {
		if (e.target.tagName === "IMG") {
			e.dataTransfer.setData("text", e.target.parentNode.id);
		} else {
			e.dataTransfer.setData("text", e.target.id);
		}
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
					e.target.style.backgroundColor = "#0d223f"; // navy blue
					dragItem.style.color = "#77bc43";
				} else if (hasClass(e.target, "col2") || hasClass(e.target, "col4")) {
					dragItem.style.backgroundColor = "transparent";
					e.target.style.backgroundColor = "#77bc43"; // green
					dragItem.style.color = "#0d223f";
				}

				if (!checkIsMatch(e.target, dragItem)) {
					scoreWrongCount.update((score) => score + 1);
					e.target.style.backgroundColor = "#bf1d1d"; // bg = red
					dragItem.style.color = "#e8e1e1"; // font color = light gray
				} else if (checkIsMatch(e.target, dragItem)) {
					scoreCorrectCount.update((score) => score + 1);
					if (dragItem.childNodes[0].tagName === "IMG") {
						dragItem.childNodes[0].setAttribute("draggable", false);
						dragItem.childNodes[0].style.cursor = "no-drop";
					} else {
						dragItem.style.overflow = "auto";
					}
					dragItem.setAttribute("draggable", false);
					dragItem.style.border = "none";
					dragItem.style.userSelect = "none";
					dragItem.style.boxShadow = "none";
					dragItem.style.cursor = "no-drop";
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

	const handleDrag = (e) => {
		e.target.style.cursor = "grabbing";
	};

	const handleMouseOver = (e) => {
		// e.target.style.cursor = "grab";
	};

	const handleMouseDown = (e) => {
		// e.target.style.cursor = "grabbing";
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500&display=swap");
	* {
		font-family: "Spartan", sans-serif;
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
		justify-content: center;
		align-items: center;
		/* border: 1px solid slategray; */
		position: absolute;
		/* position: absolute;
		bottom: 0;
		left: 0; */
		height: 145px;
		/* max-width: 195px;
    min-width: 175px; */
		width: 245px;
		padding: 2px;
		background-color: rgb(177, 177, 181);
		box-sizing: border-box;
		margin: 0 0 5px 10px;
	}

	.pieces {
		display: flex;
		justify-content: center;
		/* align-items: center; */
		text-align: center;
		align-items: top;
		height: 110px;
		max-width: 90%;
		position: absolute;
		/* overflow: auto; */
		overflow: hidden;
		padding-top: 10px;
		background-color: rgb(115, 167, 167);
		color: rgb(15, 21, 21);
		font-weight: bold;
		line-height: 1.15rem;
		border-radius: 2px;
		cursor: grab;
		box-shadow: 1px 2px 3px black;
	}

	.pieces::-webkit-scrollbar {
		display: none;
	}

	.pieces.text {
		overflow: auto;
	}

	.target-container {
		/* height: 100%; */
		height: 70%;
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
		/* height: 175px; */
		height: 130px;
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
		align-items: center;
		/* height: auto; */
		margin: 0;
		height: 35px;
		font-size: 1rem;
		font-weight: bold;
		/* padding: 1rem; */
		/* padding-bottom: 0; */
		/* border: 1px solid red; */
	}

	.img-container {
		/* max-height: 165px;
		min-height: 100px;
    max-width: auto; */
		max-height: 130px;
		padding: 1px;
		/* width: 165px; */
		box-shadow: 1px 2px 3px black;
	}

	.img-piece {
		max-height: 120px;
		/* max-width: 165px; */
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

	.score-container {
		width: 100%;
		margin-left: 50%;
	}

	@media screen and (max-width: 1120px) {
		.pieces-container {
			margin-left: 8px;
		}
	}
</style>

<!-- <svelte:window on:mousemove={handleMouseMove} /> -->

<svelte:head>
	<title>Drag N Drop 1.1</title>
</svelte:head>

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

	<div class="pieces-container" on:drop={dropItem} on:dragover={allowDrop}>
		{#each dnd_content.pieces as piece}
			{#if piece.definition || piece.hint}
				<div
					id={piece.id}
					class={`pieces ${piece.col} text`}
					draggable="true"
					on:dragstart={dragItem}
					on:mouseover={handleMouseOver}
					on:mousedown={handleMouseDown}>
					{piece.definition ? piece.definition : piece.hint}
				</div>
			{:else}
				<div id={piece.id} class={`pieces ${piece.col} img-container`} draggable="true">
					<img
						class="img-piece"
						src={piece.pic}
						alt={piece.alt}
						on:dragstart={dragItem}
						on:drag={handleDrag}
						on:mouseover={handleMouseOver}
						on:mousedown={handleMouseDown} />
				</div>
			{/if}
		{/each}
	</div>
	<div class="score-container">
		<div class="correct-score"># correct: {$scoreCorrectCount}</div>
		<div class="wrong-score"># wrong: {$scoreWrongCount}</div>
	</div>
</div>
