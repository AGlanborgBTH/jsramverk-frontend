<script>
  import Dropdown from "./dropdown.svelte";
  import Save from "./save.svelte";
  import { postDocs } from "../requests/post.svelte";
  import { putDocs } from "../requests/put.svelte"

  export let all
  export let active
  export let trix
  export let title

  let handleSave = async () => {
    const doc = {
      _id: active.id,
      title: title,
      content: trix.editor.innerText,
      innerHTML: trix.input.value
    }

    if (doc._id) {
      await putDocs(doc)
    } else {
      await postDocs(doc);
    }

    location.reload();
  }
</script>

<div class="container">
  <Save bind:handleSave />
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
