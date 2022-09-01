<script>
  import "trix/dist/trix";
</script>

<div>
  <input id="x" type="hidden" name="content" />
  <trix-editor class="trix-content" input="x" />
</div>

<style>
  trix-editor {
    display: inherit;
    height: 90%;
    text-align: left;
  }

  div {
    height: 100%;
    width: 100%;
  }
</style>
