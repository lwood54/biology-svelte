<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import type { ColHeadings, Pieces, DND_Store } from "../../types/DnDTypes";
  import { shuffleArray, hasClass } from "../../helpers";
  import Modal from "../UI/Modal.svelte";

  export let colHeadings: ColHeadings;
  export let pieces: Pieces;
  export let round: number;
  export let title: string;

  // export let dnd_store: SvelteStore<DND_Store>;
  // TODO: not seeing methods defined in type
  export let dnd_store;

  let piecesArray: Array<Pieces> = [];

  let piecesLeft = 30;
  let roundCorrect = 0;
  let roundWrong = 0;
  let modalOpen = false;

  const dispatch = createEventDispatcher();

  $: roundOver = piecesLeft <= 15;
  $: wonRound = roundOver && roundWrong < 5;
  $: if (roundCorrect >= 0) {
    switch (round) {
      case 1:
        dnd_store.updateR1Correct(roundCorrect);
        break;

      case 2:
        dnd_store.updateR2Correct(roundCorrect);
        break;
    }
    dnd_store.updateTotCorrect();
  }

  $: if (roundWrong >= 0) {
    switch (round) {
      case 1:
        dnd_store.updateR1Wrong(roundWrong);
        break;
      case 2:
        dnd_store.updateR2Wrong(roundWrong);
        break;
    }
    dnd_store.updateTotWrong();
  }

  $: if (roundOver && wonRound) {
    round = round === 1 ? 2 : 3;
    dispatch("checkround", round);
  } else if (roundOver) {
    modalOpen = true;
  }

  $: {
    if (!$dnd_store.firstLoad && round === 1) {
      // reset only if game has been loaded and user is back to round 1
      dnd_store.resetScores();
    }
  }
  onMount(() => {
    piecesArray = [...pieces];
    piecesArray = shuffleArray(piecesArray);
    roundCorrect = 0;
    roundWrong = 0;
    if (round === 2) {
      dnd_store.resetScores("round2");
    }
    // firstLoad starts as true, and is immediately turned false
    // this will affect score reset onMount so that round 2 is not reset
    // but reset will happen when coming back after game is over
    dnd_store.changeFirstLoad(false);
  });

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
    let dragItemId = e.dataTransfer.getData("text");
    let dragItem = document.getElementById(dragItemId);
    let targetIsImage = e.target.tagName === "IMG";
    // if target to drop in is not an image, is empty or the target is the pices container,
    // you can drop item into target
    if (!targetIsImage && (!e.target.firstChild || isPiecesContainer)) {
      // if the target is not the pieces container
      if (!isPiecesContainer) {
        // setting to static position so the div will be relative to parent
        dragItem.style.position = "static";
        // must make visible again because I am hadding all stacked pieces in
        // the pieces container to display only the top piece so as to not
        // stack box-shadows
        dragItem.style.visibility = "visible";
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
          roundWrong += 1;
          e.target.style.backgroundColor = "#bf1d1d"; // bg = red
          dragItem.style.color = "#e8e1e1"; // font color = light gray
        } else if (checkIsMatch(e.target, dragItem)) {
          roundCorrect += 1;
          if (dragItem.children.length >= 1) {
            if (dragItem.children[0].tagName === "IMG") {
              dragItem.children[0].setAttribute("draggable", "false");
              // typecast because style property does not exist on type 'element'
              (dragItem.children[0] as HTMLElement).style.cursor = "no-drop";
              dragItem.style.maxHeight = "110px";
            }
          } else {
            dragItem.style.overflow = "auto";
          }
          dragItem.setAttribute("draggable", "false");
          dragItem.style.border = "none";
          dragItem.style.userSelect = "none";
          dragItem.style.boxShadow = "none";
          dragItem.style.cursor = "no-drop";
        }
      } else if (isPiecesContainer) {
        // if being placed back in the pieces container,
        // going back to absolute and resetting bkgrnd & font color
        dragItem.style.position = "absolute";
        dragItem.style.backgroundColor = "rgb(115, 167, 167)";
        dragItem.style.color = "rgb(15, 21, 21)";
      }
      // now the actual placement occurs
      e.preventDefault();
      e.target.appendChild(dragItem);
      let piecesCont =
        round === 1
          ? document.getElementById("piecesCont1")
          : document.getElementById("piecesCont2");
      piecesLeft = checkPiecesLeft(piecesCont);
    }
  };

  const handleDrag = (e: DragEvent) => {
    (e.target as HTMLElement).style.cursor = "move";
  };

  const checkIsMatch = (
    target: HTMLElement,
    dragItem: HTMLElement
  ): boolean => {
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

  const checkPiecesLeft = (el: HTMLElement): number => {
    const numChildNodes = el.childNodes.length;
    return numChildNodes;
  };

  const toggleModal = () => {
    modalOpen = !modalOpen;
    clearTargets();
    piecesArray = [...pieces];
    piecesArray = shuffleArray(piecesArray);
    roundCorrect = 0;
    roundWrong = 0;
    if (round === 1) {
      dnd_store.resetScores();
    } else if (round === 2) {
      dnd_store.resetScores("round2");
    }
    piecesLeft = 30;
  };

  const clearTargets = () => {
    let arrayOfTargets = document.getElementsByClassName("target");
    for (let i = 0; i < 15; i++) {
      if (arrayOfTargets[i].firstChild) {
        let isImage =
          (arrayOfTargets[i].firstChild.firstChild as HTMLElement).tagName ===
          "IMG";
        let dragItem = arrayOfTargets[i].firstChild as HTMLElement;
        if (isImage) {
          let imgEl = dragItem.firstChild as HTMLElement;
          dragItem.style.position = "absolute";
          dragItem.style.backgroundColor = "#D8D8D8";
          dragItem.style.color = "rgb(15, 21, 21)";
          dragItem.style.boxShadow = "1px 2px 3px black";
          imgEl.style.cursor = "move";
          imgEl.setAttribute("draggable", "true");
        }
        dragItem.style.position = "absolute";
        dragItem.style.backgroundColor = "#D8D8D8";
        dragItem.style.color = "rgb(15, 21, 21)";
        dragItem.style.boxShadow = "1px 2px 3px black";
        dragItem.style.cursor = "move";
        dragItem.setAttribute("draggable", "true");
        let piecesContainer =
          round === 1
            ? document.getElementById("piecesCont1")
            : document.getElementById("piecesCont2");
        piecesContainer.appendChild(dragItem);
      }
    }
  };
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if modalOpen}
  <Modal title="Try Again!" on:closeModal={toggleModal}>
    <h3 class="modal-message">
      You must get at least 11 correct to move on to the next round!
    </h3>
  </Modal>
{/if}
<div class="game-page" on:drop={dropItem} on:dragover|preventDefault>
  <div class="target-container">
    <div class="column c1">
      <h3 class="colHeading">{colHeadings.col1Heading}</h3>
      <div id="t1" class="target col1" on:drop={dropItem} />
      <div id="t2" class="target col1" on:drop={dropItem} />
      <div id="t3" class="target col1" on:drop={dropItem} />
    </div>
    <div class="column c2">
      <h3 class="colHeading">{colHeadings.col2Heading}</h3>
      <div id="t4" class="target col2" on:drop={dropItem} />
      <div id="t5" class="target col2" on:drop={dropItem} />
      <div id="t6" class="target col2" on:drop={dropItem} />
    </div>
    <div class="column c3">
      <h3 class="colHeading">{colHeadings.col3Heading}</h3>
      <div
        id="t7"
        class="target col3"
        on:drop={dropItem}
        on:dragover|preventDefault />
      <div
        id="t8"
        class="target col3"
        on:drop={dropItem}
        on:dragover|preventDefault />
      <div
        id="t9"
        class="target col3"
        on:drop={dropItem}
        on:dragover|preventDefault />
    </div>
    <div class="column c4">
      <h3 class="colHeading">{colHeadings.col4Heading}</h3>
      <div
        id="t10"
        class="target col4"
        on:drop={dropItem}
        on:dragover|preventDefault />
      <div
        id="t11"
        class="target col4"
        on:drop={dropItem}
        on:dragover|preventDefault />
      <div
        id="t12"
        class="target col4"
        on:drop={dropItem}
        on:dragover|preventDefault />
    </div>
    <div class="column c5">
      <h3 class="colHeading">{colHeadings.col5Heading}</h3>
      <div
        id="t13"
        class="target col5"
        on:drop={dropItem}
        on:dragover|preventDefault />
      <div
        id="t14"
        class="target col5"
        on:drop={dropItem}
        on:dragover|preventDefault />
      <div
        id="t15"
        class="target col5"
        on:drop={dropItem}
        on:dragover|preventDefault />
    </div>
  </div>

  <div class="game-bar">
    <div out:fade={{ duration: 10 }} class="score-container">
      <div class="score-item">total correct: {$dnd_store.totalCorrect}</div>
      <div class="score-item">total wrong: {$dnd_store.totalWrong}</div>
      <div class="score-item">
        round
        {round}
        correct:
        {round === 1 ? $dnd_store.round1Correct : $dnd_store.round2Correct}
      </div>
      <div class="score-item">
        round
        {round}
        wrong:
        {round === 1 ? $dnd_store.round1Wrong : $dnd_store.round2Wrong}
      </div>
    </div>

    <div class="round-label" out:fade={{ duration: 10 }}>Round {round}</div>

    <div
      class="pieces-container"
      id={round === 1 ? 'piecesCont1' : 'piecesCont2'}
      on:drop={dropItem}
      on:dragover|preventDefault>
      {#each piecesArray as piece, i}
        {#if piece.definition || piece.hint}
          <div
            in:fade
            id={piece.id}
            class={`pieces ${piece.col} text`}
            draggable="true"
            on:dragstart={dragItem}>
            {piece.definition ? piece.definition : piece.hint}
          </div>
        {:else}
          <div
            in:fade
            id={piece.id}
            class={`pieces ${piece.col} img-container`}
            draggable="true">
            <img
              class="img-piece"
              src={piece.pic}
              alt={piece.alt}
              on:dragstart={dragItem}
              on:drag={handleDrag} />
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500&display=swap");
  * {
    font-family: "Spartan", sans-serif;
  }

  .modal-message {
    width: 100%;
    text-align: center;
  }

  .game-page {
    height: 650px;
    width: 100%;
    min-width: 830px;
    max-width: 1500px;
    margin: auto;
    box-sizing: border-box;
  }
  .game-bar {
    display: flex;
    justify-content: space-between;
    margin: 0.75rem;
  }
  .pieces-container {
    height: 145px;
    width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
  }
  .pieces {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: top;
    height: 110px;
    max-width: 90%;
    position: absolute;
    overflow: hidden;
    padding: 5% 5% 0 5%;
    background-color: #d8d8d8;
    color: #314541;
    line-height: 1.15rem;
    border-radius: 2px;
    cursor: move;
    box-shadow: 1px 2px 3px black;
    visibility: hidden;
  }
  /* only show first div in container helps prevent
  stacking up of box-shadow
  NOTE: make sure to have any dropped divs in targets visible */
  .pieces-container div:first-of-type {
    visibility: visible;
  }
  .pieces::-webkit-scrollbar {
    display: none;
  }
  .pieces.text {
    overflow: auto;
  }
  .img-container {
    max-height: 130px;
    padding: 1px;
    display: flex;
    justify-content: center;
    box-shadow: 1px 2px 3px black;
    align-items: center;
  }
  .img-piece {
    max-height: 90%;
    min-width: 75px;
    max-width: 100%;
    overflow: hidden;
    margin: 0 5px;
  }
  .score-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .score-item {
    margin-bottom: 0.6rem;
  }
  .round-label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 114px;
    font-size: 3rem;
  }
  .target-container {
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
    margin: 0;
    height: 35px;
    font-size: 1rem;
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
  @media screen and (max-width: 1120px) {
    .pieces-container {
      margin-left: 8px;
    }
  }
</style>
