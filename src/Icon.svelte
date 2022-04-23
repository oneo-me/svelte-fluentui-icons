<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let key;
    export let value;

    const dispatch = createEventDispatcher();

    function onClick() {
        navigator.clipboard.writeText(key);

        dispatch("copy", key);
    }
</script>

<div
    class="grid place-content-center p-2
    rounded-lg
    shadow-md hover:shadow-xl dark:shadow-slate-900
    bg-white dark:bg-slate-500/30
    outline dark:outline-cyan-300/50 outline-1 hover:outline-2 dark:hover:outline-cyan-300
    text-slate-500 dark:text-white
    transition duration-100 hover:scale-110 active:scale-105"
    on:click={onClick}
>
    <svelte:component this={value} size="55" />
</div>
