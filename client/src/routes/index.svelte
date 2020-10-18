<script>
  import { onMount } from "svelte";
  import axios from "axios";

  let loginBtn = "";

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("state")) {
      await handleAuthCallback(urlParams);
      return;
    }
    await getLoginBtn();
  });

  async function getLoginBtn() {
    try {
      const res = await axios.get("http://localhost:8080/auth/login", {
        withCredentials: true,
      });
      loginBtn = res.data;
    } catch (e) {
      console.error(e);
    }
  }

  async function handleAuthCallback(urlParams) {
    const res = await axios.get("http://localhost:8080/auth", {
      withCredentials: true,
      params: {
        state: urlParams.get("state"),
        code: urlParams.get("code"),
        scope: urlParams.get("scope"),
      },
    });
    console.log(res.data);
  }

  async function loginCheck() {
    try {
      const res = await axios.get("http://localhost:8080/auth/user-details", {
        withCredentials: true,
      });
      console.log(res);
      alert(res.data.email);
    } catch (e) {
      console.error(e);
    }
  }
</script>

<svelte:head>
  <title>Mr. Wood's Biology Page</title>
</svelte:head>

<h3>Login</h3>
{@html loginBtn}
<button on:click={loginCheck}>login check</button>

<style>
</style>
