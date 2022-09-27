<script>
  import "trix/dist/trix.js";
  import "trix/dist/trix.css";

  export let content
  export let input
  export let editor

  function updTrix() {
    if (editor && input) {
      input.setAttribute("value", content)
      editor.innerHTML = content
    }
  }

  $: content, updTrix()
</script>

<div>
  <input id="trixmainid" type="hidden" name="content" bind:this={input} />
  <trix-editor class="trix-content" input="trixmainid" bind:this={editor} />
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
