<script lang="ts">
    import { onMount } from "svelte";

    export let icon;

    let iconElement: HTMLDivElement;
    let key: string;

    function onClick() {
        navigator.clipboard.writeText(key);
    }

    onMount(async () => {
        key = iconElement.firstChild.firstChild.textContent;
    });
</script>

<div class="icon" on:click={onClick} bind:this={iconElement}>
    <svelte:component this={icon} size="50" />
</div>
<p class="key">{key}</p>

<style>
    .icon {
        padding: 10px;
        line-height: 0;
        width: 72px;
        height: auto;
        margin: 0 auto;

        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    .icon:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .icon:active {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .key {
        width: 80px;
        text-align: center;
        text-overflow: ellipsis;
        font-size: 0.6rem;
        color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
    }
</style>
