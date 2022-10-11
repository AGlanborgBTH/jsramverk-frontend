<script context="module">
    import * as config from "../../../../config/config.json";
    const URL = config.URL;
  
    export async function register(email, password) {
      const data = {
        email: email,
        password: password
      }
  
      const response = await fetch(`${URL}/user/register`, {
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