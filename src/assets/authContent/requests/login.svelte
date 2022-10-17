<script context="module">
  import * as config from "../../../../config/config.json";
  const URL = config.URL;

  export async function login(email, password) {
    const data = {
      email: email,
      password: password,
    };

    const response = await fetch(`${URL}/user/login`, {
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
