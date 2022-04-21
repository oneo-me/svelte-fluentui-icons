<script lang="ts">
    import * as Icons from "./Index.js";
    import Icon from "./Icon.svelte";
</script>

<h1>Svelte Fluent UI Icons</h1>
<h2>可使用浏览器搜索，点击复制 Icon 名称</h2>

<ul>
    {#each Object.values(Icons) as icon}
        <li><Icon {icon} /></li>
    {/each}
</ul>

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
        margin: 0;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.8);
    }

    h1 {
        font-size: 2rem;
        text-align: center;
        font-weight: 800;
    }

    h2 {
        font-size: 1.2rem;
        text-align: center;
        font-weight: 400;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 1rem;
    }

    li {
        margin: 0.5rem;
    }
</style>
