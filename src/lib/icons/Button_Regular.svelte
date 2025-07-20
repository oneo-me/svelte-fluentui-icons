<script>
  import IconBase from "../components/icon-base.svelte";
  let { ...others } = $props();
</script>

<IconBase
    title="Button_Regular"
    viewBox="0 0 20 20"
    data="M2 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm3-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5Zm4 3.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z M 0 0 M 20 20"
    {...others}
/>
