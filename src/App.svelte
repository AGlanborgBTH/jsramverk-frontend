<script>
  import "https://cdn.socket.io/socket.io-3.0.0.js";
  import Trix from "./assets/trix.svelte";
  import Toolbar from "./assets/toolbar/main.svelte";
  import { getAllDocs } from "./assets/requests/get.svelte";
  import { io } from "socket.io-client";
  import * as conf from "../config/config.json";

  let socket = io(conf.URL);
  let all = [];
  let id = "";
  let content = "";
  let input;
  let editor;
  let title = "New Document";

  function updActive() {
    if (id != "") {
      all.forEach((element) => {
        if (element._id == id) {
          title = element.title;
          content = element.innerHTML;
        }
      });
    } else {
      title = "New Document";
      content = "";
    }
  }

  function emitDoc() {
    if (socket) {
      const doc = {
        id: id,
        content: input.value,
        title: title,
        innerHTML: editor.innerHTML,
      };

      socket.emit("doc", doc);
    }
  }

  socket.on("doc", function (doc) {
    if (doc) {
      if (id == doc.id) {
        title = doc.title;
        content = doc.content;
        input.value = doc.content;
        editor.innerHTML = doc.innerHTML;
      }
    }
  });

  addEventListener("keyup", (event) => {
    if (event.key == " " || event.key == "Enter") {
      emitDoc();
    }
  });

  $: id, updActive();
  $: getAllDocs().then((result) => (all = result));
</script>

<main>
  <form on:submit|preventDefault={() => {}}>
    <Toolbar bind:socket bind:all bind:id bind:editor bind:input bind:title />
    <Trix bind:content bind:editor bind:input />
  </form>
</main>

<style>
  main {
    height: 90vh;
    width: 1280px;
    background-color: rgb(220, 220, 220);
    color: rgb(0, 0, 0);
  }

  form {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
  }
</style>
