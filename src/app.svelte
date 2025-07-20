<script>
  import "./app.css";
  import Github_Filled from "./lib/icons/Github_Filled.svelte";
  import Search_Filled from "./lib/icons/Search_Filled.svelte";

  import Icons from "../icons.js";
  import { onMount } from "svelte";

  let source = [];
  let icons = [];
  let keyword = "";
  const title = "Svelte FluentUI Icons";

  function onInput() {
    let filterBy = keyword.toLowerCase();
    if (filterBy === "") icons = source;
    else
      icons = source.filter((icon) =>
        icon.key.toLowerCase().includes(filterBy)
      );
  }

  function onClick(key) {
    navigator.clipboard.writeText(key);
  }

  onMount(async () => {
    source = Icons;
    onInput();
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div
  class="h-screen flex flex-col antialiased bg-gray-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
>
  <div
    class="flex items-center p-4 border-dashed border-b border-slate-900/10 dark:border-slate-50/20"
  >
    <div class="flex flex-1 flex-col gap-1">
      <a href="/"><h1 class="font-bold">{title}</h1></a>
      <div class="flex gap-2">
        <a href="https://www.npmjs.com/package/svelte-fluentui-icons"
          ><img
            alt=""
            src="https://badge.fury.io/js/svelte-fluentui-icons.svg"
          /></a
        >
        <a href="https://opensource.org/licenses/MIT"
          ><img
            alt=""
            src="https://img.shields.io/badge/License-MIT-yellow.svg"
          /></a
        >
      </div>
    </div>

    <div class="flex items-center gap-3">
      <div class="flex justify-center">
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
            oninput={onInput}
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
      <a
        class="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-100"
        href="https://github.com/oneo-me/svelte-fluentui-icons"
        target="_break"><Github_Filled size="36" /></a
      >
    </div>
  </div>

  <div
    class="flex-1 p-4 flex flex-wrap gap-4 justify-center items-start overflow-y-auto"
  >
    {#each icons as icon}
      {@const CurrentIcon = icon.value}
      <button
        onclick={() => onClick(icon.key)}
        class="rounded-2xl p-3
    bg-slate-500/5 hover:bg-slate-500/30 active:bg-slate-500/20
    dark:bg-slate-200/5 dark:hover:bg-slate-200/30 dark:active:bg-slate-200/20
     transition duration-100"
      >
        <CurrentIcon size={45} />
      </button>
    {/each}
  </div>

  <div
    class="p-4 border-dashed border-t border-slate-900/10 dark:border-slate-50/20"
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
</div>
