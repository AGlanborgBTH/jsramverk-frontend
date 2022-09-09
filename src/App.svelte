<script>
  import Trix from "./assets/trix.svelte";
  import Toolbar from "./assets/toolbar/main.svelte";

  let content;
</script>

<main>
  <form on:submit|preventDefault={() => {}}>
    <Toolbar bind:content />
    <Trix bind:content />
  </form>
</main>

<style>
  main {
    height: 90vh;
    width: 1280px;
    background-color: rgb(220, 220, 220);
    color: rgb(0, 0, 0);
  }

  form {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
  }
</style>
