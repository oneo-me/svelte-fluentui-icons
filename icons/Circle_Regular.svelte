<script>
  import IconBase from "../components/icon-base.svelte";
  let { ...others } = $props();
</script>

<IconBase
    title="Circle_Regular"
    viewBox="0 0 20 20"
    data="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z M 0 0 M 20 20"
    {...others}
/>
