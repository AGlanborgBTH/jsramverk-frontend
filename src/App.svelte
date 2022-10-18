<script>
  import Comments from "./assets/comments.svelte";
  import Editor from "./assets/editor.svelte";
  import Auth from "./assets/auth.svelte";

  let token = "";
  let userId = "";
  let editor = undefined;
  let comments = {};
</script>

{#if token}
  {#if editor}
    <Comments bind:editor bind:comments />
  {/if}
  <Editor bind:token bind:userId bind:editor bind:comments />
{:else}
  <Auth bind:token bind:userId />
{/if}

<style></style>
