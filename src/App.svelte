<script>
  import Editor from "./assets/editor.svelte"
  import Auth from "./assets/auth.svelte"

  let token = ""
  let userId = ""
</script>

{#if token}
  <Editor bind:token bind:userId />
{:else}
  <Auth bind:token bind:userId />
{/if}

<style></style>
