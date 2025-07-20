<script>
  let { title = null, data = null, size = 22, viewBox, ...others } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  style="width: {size}px; height: {size}px"
  {...others}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <path d={data} />
</svg>

<style>
  svg {
    stroke: currentColor;
    fill: currentColor;
    stroke-width: 0;
    width: 100%;
    height: auto;
    max-height: 100%;
  }
</style>
