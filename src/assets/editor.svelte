<script>
  import "https://cdn.socket.io/socket.io-3.0.0.js";

  import Trix from "./editorContent/trix.svelte";
  import Toolbar from "./editorContent/toolbar/main.svelte";

  import { getAllDocs } from "./editorContent/requests/get.svelte";
  import { io } from "socket.io-client";

  import * as conf from "../../config/config.json";

  export let token;
  export let userId;
  export let editor;
  export let comments;

  let socket = io(conf.URL);
  let all = [];
  let content = "";
  let id = "";
  let input = undefined;
  let title = "New Document";
  let num = 0;

  function updActive() {
    if (id != "") {
      all.forEach((element) => {
        if (element._id == id) {
          title = element.title;
          content = element.innerHTML;
          comments = element.comments;
        }
      });
    } else {
      title = "New Document";
      content = "<div></div>";
      comments = {};
    }
  }

  function updPublic() {
    all.forEach((doc) => {
      if (doc._id == "*") {
        doc._id = `public${num}`;
      }
    });
  }

  function emitDoc() {
    if (socket) {
      const doc = {
        id: id,
        content: input.value,
        title: title,
        innerHTML: editor.innerHTML,
        comments: comments
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
        comments = doc.comments
      }
    }
  });

  addEventListener("keyup", (event) => {
    if (event.key == " " || event.key == "Enter" || event.key == "Backspace") {
      emitDoc();
    }
  });

  $: id, updActive();
  $: getAllDocs(token, userId).then(
    (result) => (all = result)
  );
  $: all, updPublic();
</script>

<main>
  <form on:submit|preventDefault={() => {}}>
    <Toolbar
      bind:token
      bind:userId
      bind:socket
      bind:all
      bind:id
      bind:editor
      bind:input
      bind:title
      bind:comments
    />
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
