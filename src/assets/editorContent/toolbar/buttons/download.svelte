<script>
  export let handleDownload;
</script>

<input on:click={handleDownload} type="button" value="Download" class="save" />

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
