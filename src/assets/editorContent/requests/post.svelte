<script context="module">
  import * as config from "../../../../config/config.json";
  const URL = config.URL;

  export async function postDocs(token, data) {
    const response = await fetch(`${URL}/doc/post`, {
      method: "POST",
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
