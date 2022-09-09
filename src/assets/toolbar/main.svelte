<script>
  import Dropdown from "./dropdown.svelte";
  import Save from "./save.svelte";
  export let content = undefined;
</script>

<div class="container">
  <Save bind:content />
  <Dropdown />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(60, 60, 60);
    height: 55px;
  }
</style>
