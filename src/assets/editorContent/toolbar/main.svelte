<script>
  import { jsPDF } from "jspdf";
  import html2pdf from "html2pdf.js/dist/html2pdf.bundle";

  import Dropdown from "./buttons/dropdown.svelte";
  import Save from "./buttons/save.svelte";
  import Download from "./buttons/download.svelte";
  import Invite from "./buttons/invite.svelte";

  import { postDocs, postEmail } from "../requests/post.svelte";
  import { putDocs } from "../requests/put.svelte";
  import { getAllDocs } from "../requests/get.svelte";

  export let token;
  export let userId;
  export let userEmail;
  export let socket;
  export let all;
  export let id;
  export let input;
  export let editor;
  export let title;
  export let comments;
  export let emails;

  let email = "";

  let handleSave = async (other = "") => {
    const doc = {
      title: title,
      content: editor.innerText,
      innerHTML: input.value,
      comments: {},
      emails: [...emails],
    };

    if (comments) {
      const temp = Object.entries(comments);

      temp.forEach((comment) => {
        if (comment[1]) {
          doc.comments[comment[0]] = comment[1];
        }
      });
    }

    if (id.includes("public")) {
      doc._id = "*";
    } else {
      doc._id = id;
    }

    if (other) {
      doc.emails = [...doc.emails, other];
    }

    if (doc._id) {
      await putDocs(token, doc);
    } else {
      doc.users = [userId];
      await postDocs(token, doc);
      id = ""
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
      alert("Because of bug, firefox browsers will only print plain text");
    } else {
      html2pdf().from(editor.innerHTML).save(`${title}.pdf`);
    }
  };

  let handleEmail = async () => {
    if (validateEmail(email)) {
      const request = {
        from: userEmail,
        to: email,
      };

      await postEmail(token, request);
      await handleSave(email);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
</script>

<div class="container">
  <div>
    <Save bind:handleSave />
    <Download bind:handleDownload />
  </div>
  <div>
    <Invite bind:email bind:handleEmail />
    <Dropdown bind:all bind:id bind:title bind:handleNewDoc />
  </div>
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
