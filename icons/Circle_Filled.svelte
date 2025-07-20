<script>
  import IconBase from "../components/icon-base.svelte";
  let { ...others } = $props();
</script>

<IconBase
    title="Circle_Filled"
    viewBox="0 0 20 20"
    data="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z M 0 0 M 20 20"
    {...others}
/>
