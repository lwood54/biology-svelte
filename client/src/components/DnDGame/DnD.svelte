<script lang="ts">
    import { dnd_store } from "../../stores/dnd_game_store";
    import GameBoard from "./GameBoard.svelte";
    import { fade, fly } from "svelte/transition";
    import GameOver from "./GameOver.svelte";
    import type { ColHeadings } from "../../types/DnDTypes";

    export let dnd_content;
    // TS/Svelte requires this pattern for reactive declarations (https://blog.scottlogic.com/2020/07/24/svelte-ts.html)
    let updatedRound: number;
    $: updatedRound = 1;

    let colHeadings: ColHeadings;
    $: colHeadings =
        updatedRound === 1 ? dnd_content.dndgame1 : dnd_content.dndgame2;
    $: pieces = updatedRound === 1 ? dnd_content.pieces1 : dnd_content.pieces2;
    $: round = updatedRound;

    const updateRound = (e) => {
        console.log("updatedRound: ", e.detail);
        updatedRound = e.detail;
    };
</script>

{#if updatedRound === 1}
    <div in:fade={{ duration: 300 }} out:fade={{ duration: 500 }}>
        <GameBoard
            {dnd_store}
            title={dnd_content.title}
            {colHeadings}
            {pieces}
            on:checkround={updateRound}
            {round} />
    </div>
{:else if updatedRound === 2}
    <div
        in:fade={{ delay: 600, duration: 500 }}
        out:fly={{ x: 200, duration: 500 }}>
        <GameBoard
            {dnd_store}
            title={dnd_content.title}
            {colHeadings}
            {pieces}
            on:checkround={updateRound}
            {round} />
    </div>
{:else if updatedRound === 3}
    <div in:fly={{ y: 200, delay: 600 }}>
        <GameOver
            totalCorrect={$dnd_store.totalCorrect}
            totalWrong={$dnd_store.totalWrong} />
    </div>
{/if}
