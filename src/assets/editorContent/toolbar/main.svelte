<script>
  import Dropdown from "./dropdown.svelte";
  import Save from "./save.svelte";
  import { postDocs } from "../requests/post.svelte";
  import { putDocs } from "../requests/put.svelte"
  import { getAllDocs } from "../requests/get.svelte";

  export let token
  export let socket
  export let all
  export let id
  export let input
  export let editor
  export let title

  let handleSave = async () => {
    const doc = {
      _id: id,
      title: title,
      content: editor.innerText,
      innerHTML: input.value
    }

    if (doc._id) {
      await putDocs(token, doc)
    } else {
      await postDocs(token, doc);
    }

    getAllDocs(token).then((result) => (all = result))
  }

  let handleNewDoc = (newId) => {
    id = newId

    socket.emit("newDoc", {id: newId})
  }
</script>

<div class="container">
  <Save bind:handleSave />
  <Dropdown bind:all bind:id bind:title bind:handleNewDoc />
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
