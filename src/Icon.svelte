<script lang="ts">
    export let key;
    export let value;

    function onClick() {
        navigator.clipboard.writeText(key);
    }
</script>

<div
    class="rounded-2xl p-3
    bg-slate-500/5 hover:bg-slate-500/30 active:bg-slate-500/20
    dark:bg-slate-200/5 dark:hover:bg-slate-200/30 dark:active:bg-slate-200/20
     transition duration-100"
    on:click={onClick}
>
    <svelte:component this={value} size="45" />
</div>
