<script context="module">
  import * as config from "../../../config/config.json"
  const URL = config.URL

  export async function postOneDocs(data) {
    const response = await fetch(`${URL}/docs/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    return result.data;
  }
</script>
