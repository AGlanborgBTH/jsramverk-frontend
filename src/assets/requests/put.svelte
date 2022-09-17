<script context="module">
  import * as config from "../../../config/config.json";
  const URL = config.URL;

  export async function putDocs(data) {
    const response = await fetch(`${URL}/docs/put`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    return result.data;
  }
</script>
