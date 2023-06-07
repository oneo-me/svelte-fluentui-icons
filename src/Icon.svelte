<script lang="ts">
    export let key;
    export let value;

    function onClick() {
        navigator.clipboard.writeText(key);
    }
</script>

<div class="h-full box-border p-1">
    <div
        class="rounded-2xl h-full flex items-center justify-center max-h-full max-w-full p-2
    bg-slate-500/5 hover:bg-slate-500/30 active:bg-slate-500/20
    dark:bg-slate-200/5 dark:hover:bg-slate-200/30 dark:active:bg-slate-200/20
     transition duration-100"
        on:click={onClick}
    >
        <svelte:component this={value} size="45" />
    </div>
</div>
