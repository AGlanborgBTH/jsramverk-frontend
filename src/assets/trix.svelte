<script>
  import "trix/dist/trix.js";
  import "trix/dist/trix.css";

  export let content = undefined;
</script>

<div>
  <input id="x" type="hidden" name="content" />
  <trix-editor bind:this={content} class="trix-content" input="x" />
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
