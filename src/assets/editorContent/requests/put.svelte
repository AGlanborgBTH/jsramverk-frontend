<script context="module">
  import * as config from "../../../../config/config.json";
  const URL = config.LOCAL;

  export async function putDocs(token, data) {
    const response = await fetch(`${URL}/doc/put`, {
      method: "PUT",
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    return result.data;
  }
</script>
