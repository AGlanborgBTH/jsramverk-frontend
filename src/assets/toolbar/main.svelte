<script>
  import Dropdown from "./dropdown.svelte";
  import Save from "./save.svelte";

  export let all
  export let active
  export let trix
  export let title

</script>

<div class="container">
  <Save bind:active bind:trix bind:title />
  <Dropdown bind:all bind:active bind:title />
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
