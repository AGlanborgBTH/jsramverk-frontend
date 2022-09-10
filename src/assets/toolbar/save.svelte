<script>
  export let active
  export let trix
  export let title

  function handleSave() {
    const doc = {
      _id: active.id,
      title: title,
      content: trix.editor.innerText,
      innerHTML: trix.input.value
    }

    console.log(doc);
  }
</script>

<div>
  <input
    on:click={handleSave}
    type="button"
    value="Save Project"
    class="save"
  />
</div>

<style>
  .save {
    padding: 5px;
    margin: 10px 20px;
  }

  input[type="button"] {
    border: none;
    outline: none;
    margin: 0;
    height: 100%;
    background-color: rgb(60, 60, 60);
    padding: 0 15px;
    font-size: 15px;
    line-height: 0;
  }

  input[type="button"]:hover {
    background-color: rgb(52, 52, 52);
    cursor: pointer;
  }
</style>
