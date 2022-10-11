<script context="module">
  import * as config from "../../../../config/config.json"
  const URL = config.URL

  export async function getAllDocs(token, userId) {
    const response = await fetch(`${URL}/doc`, {
      headers: {
        "x-access-token": token,
        "data-user-id": userId
      }
    });
    const result = await response.json();

    return result.data;
  }

  export async function getOneDocs(id) {
    const response = await fetch(`${URL}/doc/${id}`);
    const result = await response.json();

    return result.data;
  }
</script>
