<script>
  import "trix/dist/trix.js";
  import "trix/dist/trix.css";

  export let active
  export let trix

  function updContent() {
    if (trix.editor && trix.input) {
      trix.input.setAttribute("value", active.content)
      trix.editor.innerHTML = active.content
    }
  }

  $: active.content, updContent()
</script>

<div>
  <input id="trixmainid" type="hidden" name="content" bind:this={trix.input} />
  <trix-editor class="trix-content" input="trixmainid" bind:this={trix.editor} />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }

  trix-editor {
    display: inherit;
    height: 100%;
    text-align: left;
  }
</style>
