<script>
  import "trix/dist/trix.js"
  import "trix/dist/trix.css"

  let content

  function handleSave () {
    console.log(content.outerText)
  }

</script>

<main>
  <form on:submit|preventDefault={() =>{}}>
    <div class="saveContainer">
      <input on:click={handleSave} type="button" value="Save Project" class="save">
    </div>
    <input id="x" type="hidden" name="content">
    <trix-editor bind:this={content} class="trix-content" input="x"></trix-editor>
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

  trix-editor {
    display: inherit;
    height: 100%;
    text-align: left;
  }

  .saveContainer {
    display: flex;
    flex-direction: row;
    background-color: rgb(60, 60, 60);
  }

  .save {
    padding: 5px;
    margin: 10px 20px;
  }
</style>
