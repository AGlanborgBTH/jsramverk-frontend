<script>
  import Trix from "./assets/trix.svelte";
  import Toolbar from "./assets/toolbar/main.svelte";
  import {getAllDocs, getOneDocs} from "./assets/get.svelte"

  let all = [];
  let active = {
    id: "",
    content: ""
  };
  let trix = {
    input: undefined,
    editor: undefined
  };
  let title = "New Document"

  function operate() {
    if (active.id != "") {
      all.forEach(element => {
        if (element._id == active.id) {
          title = element.title
          active.content = element.innerHTML
        }
      });
    } else {
      title = "New Document"
      active.content = ""
    };
  };

  $: active.id, operate()
  $: getAllDocs().then((result) => all = result)
</script>

<main>
  <form on:submit|preventDefault={() => {}}>
    <Toolbar bind:all bind:active bind:trix bind:title />
    <Trix bind:active bind:trix />
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
