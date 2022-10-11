<script>
  import Editor from "./assets/editor.svelte"
  import Auth from "./assets/auth.svelte"

  let token = ""
</script>

{#if token}
  <Editor bind:token />
{:else}
  <Auth bind:token />
{/if}

<style></style>
