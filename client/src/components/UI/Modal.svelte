<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    export let title: string;

    const dispatch = createEventDispatcher();

    const closeModal = () => {
        dispatch("closeModal");
    };
</script>

<div class="modal-backdrop" transition:fade />
<div class="modal" transition:fly={{ y: 300 }}>
    <h1 class="modal-title">{title}</h1>
    <div class="content">
        <slot />
    </div>
    <footer>
        <div class="modal-btn-container">
            <slot name="footer">
                <button class="modal-button" on:click={closeModal}>Try Again</button>
            </slot>
        </div>
    </footer>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    .modal-btn-container {
        text-align: center;
        width: 100%;
        margin: auto;
    }

    .modal-button {
        width: 25%;
        height: 55px;
        margin: auto;
        cursor: pointer;
    }

    .modal-title {
        width: 100%;
        text-align: center;
        box-sizing: border-box;
    }

    .modal {
        position: fixed;
        top: 10vh;
        left: 10%;
        width: 80%;
        max-height: 80vh;
        background: white;
        border-radius: 5px;
        z-index: 100;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        overflow: scroll;
    }
    h1 {
        padding: 1rem;
        margin: 0;
        border-bottom: 1px solid #ccc;
        font-family: "Roboto Slab", sans-serif;
    }
    .content {
        padding: 1rem;
    }
    footer {
        padding: 1rem;
    }
    @media (min-width: 768px) {
        .modal {
            width: 40rem;
            left: calc(50% - 20rem);
        }
    }
</style>
