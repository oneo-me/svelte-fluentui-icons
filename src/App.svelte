<script lang="ts">
    import Github_Filled from "../icons/Github_Filled.svelte";
    import Search_Filled from "../icons/Search_Filled.svelte";

    import Icon from "./Icon.svelte";
    import Icons from "../Index.js";
    import { onMount } from "svelte";

    document.body.className = "antialiased bg-white dark:bg-slate-900";

    let source = [];
    let icons = [];
    let keyword = "";

    function onInput() {
        let filterBy = keyword.toLowerCase();
        if (keyword === "") icons = source;
        else
            icons = source.filter((icon) =>
                icon.key.toLowerCase().includes(filterBy)
            );
    }

    onMount(async () => {
        source = Icons;
        onInput();
    });

    let copyKey = "";

    function handleCopy(event) {
        copyKey = event.detail;

        console.log(copyKey);
    }
</script>

<div
    class="sticky top-0 z-40 w-full
    backdrop-blur
    bg-white/90 dark:bg-slate-900/75
    border-b border-slate-900/10 dark:border-slate-50/[0.06]
    mb-10"
>
    <div
        class="container mx-auto p-4
            text-lg
            flex flex-row gap-3"
    >
        <div class="basis-1/3 group relative">
            <Search_Filled
                size="20"
                class="absolute left-3 top-1/2 -mt-2.5
                    text-slate-400 pointer-events-none
                    group-focus-within:text-cyan-500
                    dark:group-focus-within:text-cyan-500"
                aria-hidden="true"
            />
            <input
                bind:value={keyword}
                on:input={onInput}
                class="pl-10 py-2
                rounded-full
                bg-slate-300/10
                dark:bg-slate-600/10

                text-slate-600 placeholder-slate-400
                dark:text-white dark:placeholder-slate-100/50

                ring-1 focus:outline-none

                ring-slate-600 focus:ring-cyan-500
                dark:ring-slate-200 dark:focus:ring-cyan-300

                appearance-none text-sm"
                type="text"
                aria-label="Search icons"
                placeholder="Search icons..."
            />
        </div>
        <div class="basis-2/3 text-center">
            <a
                class="font-bold
                underline underline-offset-4
                text-slate-600 dark:text-white
                hover:text-cyan-500 dark:hover:text-cyan-300"
                href="/svelte-fluentui-icons">Svelte Fluent UI Icons</a
            >
        </div>
        <div class="basis-1/3 grid justify-items-stretch items-stretch">
            <a
                href="https://github.com/oneo-me/svelte-fluentui-icons"
                target="_break"
                class="justify-self-end self-center
                    text-slate-600 dark:text-white
                    hover:text-cyan-500 dark:hover:text-cyan-300"
                ><Github_Filled size="32" />
            </a>
        </div>
    </div>
</div>

<div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-center gap-8 my-4">
        {#each icons as icon}
            <Icon key={icon.key} value={icon.value} on:copy={handleCopy} />
        {/each}
    </div>
</div>

<div
    class="mt-10 p-10 sticky
    border-dashed border-t border-slate-900/10 dark:border-slate-50/[0.06]"
>
    <div
        class="container mx-auto
    text-slate-800 dark:text-slate-300 text-center"
    >
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
