<script lang="ts">
    import Github_Filled from "../icons/Github_Filled.svelte";
    import Cube_Filled from "../icons/Cube_Filled.svelte";
    import Search_Filled from "../icons/Search_Filled.svelte";
    import Earth_Filled from "../icons/Earth_Filled.svelte";

    import Icon from "./Icon.svelte";
    import Icons from "../Index.js";
    import { onMount } from "svelte";

    document.body.className =
        "antialiased bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300";

    let source = [];
    let icons = [];
    let keyword = "";

    function onInput() {
        let filterBy = keyword.toLowerCase();
        if (filterBy === "") icons = source;
        else
            icons = source.filter((icon) =>
                icon.key.toLowerCase().includes(filterBy)
            );
    }

    onMount(async () => {
        source = Icons;
        onInput();
    });
</script>

<a href="/"
    ><h1 class="text-center text-3xl my-10">Svelte Fluent UI Icons</h1></a
>
<div class="flex flex-row justify-center space-x-6">
    <a
        class="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-100"
        href="https://oneo.me"
        target="_break"><Earth_Filled size="30" /></a
    >
    <a
        class="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-100"
        href="https://www.npmjs.com/package/svelte-fluentui-icons"
        target="_break"><Cube_Filled size="30" /></a
    >
    <a
        class="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-100"
        href="https://github.com/oneo-me/svelte-fluentui-icons"
        target="_break"><Github_Filled size="30" /></a
    >
</div>
<div class="my-10 flex justify-center">
    <div class="relative group">
        <Search_Filled
            size="22"
            class="absolute top-1/2 -mt-2.5 left-2.5 text-slate-400
             pointer-events-none
        group-focus-within:text-cyan-500
        transition duration-100
    "
        />
        <input
            type="text"
            bind:value={keyword}
            on:input={onInput}
            class="appearance-none focus:outline-none
            w-80 bg-slate-50 dark:bg-slate-800
            border rounded-2xl pl-9 pr-3 py-2
            border-slate-300 focus:border-cyan-500
            dark:border-slate-500 dark:focus:border-cyan-400
            transition duration-100
        "
            aria-label="Search icons"
            placeholder="Search icons..."
        />
    </div>
</div>

<div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center gap-4 my-4">
        {#each icons as icon}
            <Icon key={icon.key} value={icon.value} />
        {/each}
    </div>
</div>

<div
    class="m-10 p-10
    border-dashed border-t border-slate-900/10 dark:border-slate-50/20"
>
    <div class="container mx-auto text-center">
        <p>
            由
            <a
                class="no-underline hover:underline text-cyan-600 dark:text-cyan-400"
                href="https://github.com/oneo-me"
                target="_break">ONEO</a
            >
            使用
            <a
                class="no-underline hover:underline text-cyan-600 dark:text-cyan-400"
                href="https://github.com/microsoft/fluentui-system-icons"
                target="_break">fluentui-system-icons</a
            > 创建了这个项目
        </p>
    </div>
</div>
