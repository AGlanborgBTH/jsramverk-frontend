<script>
  import { jsPDF } from "jspdf";
  import html2pdf from "html2pdf.js/dist/html2pdf.bundle";

  import Dropdown from "./dropdown.svelte";
  import Save from "./save.svelte";
  import Download from "./download.svelte";

  import { postDocs } from "../requests/post.svelte";
  import { putDocs } from "../requests/put.svelte";
  import { getAllDocs } from "../requests/get.svelte";

  export let token;
  export let userId;
  export let socket;
  export let all;
  export let id;
  export let input;
  export let editor;
  export let title;
  export let comments

  let handleSave = async () => {
    const doc = {
      title: title,
      content: editor.innerText,
      innerHTML: input.value,
      comments: {}
    };

    if (comments) {
      const temp = Object.entries(comments)

      temp.forEach((comment) => {
        if (comment[1]) {
          doc.comments[comment[0]] = comment[1]
        }
      })
    }

    if (id.includes("public")) {
      doc._id = "*";
    } else {
      doc._id = id;
    }

    if (doc._id) {
      await putDocs(token, doc);
    } else {
      doc.users = [userId];
      await postDocs(token, doc);
    }

    getAllDocs(token, userId).then((result) => (all = result));
  };

  let handleNewDoc = (newId) => {
    id = newId;

    socket.emit("newDoc", { id: newId });
  };

  let handleDownload = () => {
    if (navigator.userAgent.match(/firefox|fxios/i)) {
      const doc = new jsPDF("p", "pt", "letter");

      doc.text(editor.innerText, 20, 35);
      doc.save(`${title}.pdf`);
      alert('Because of bug, firefox browsers will only print plain text')
    } else {
      html2pdf().from(editor.innerHTML).save(`${title}.pdf`);
    }
  };
</script>

<div class="container">
  <div>
    <Save bind:handleSave />
    <Download bind:handleDownload />
  </div>
  <Dropdown bind:all bind:id bind:title bind:handleNewDoc />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(60, 60, 60);
    height: 55px;
  }
</style>
