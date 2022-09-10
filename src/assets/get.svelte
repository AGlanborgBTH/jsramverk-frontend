<script context="module">
  const URL = "http://localhost:8081"

  export async function getAllDocs() {
    const response = await fetch(`${URL}/docs`);
    const result = await response.json();

    return result.data;
  }

  export async function getOneDocs(id) {
    const response = await fetch(`${URL}/docs/${id}`);
    const result = await response.json();

    return result.data;
  }
</script>
