<script>
    export let email
    export let handleEmail
</script>

<input type="text" placeholder="Invite via Email..." bind:value={email} />
<input type="button" value="Invite" on:click={handleEmail} />

<style>
    input {
        border: none;
        outline: 3px solid rgb(100, 100, 100);
        border-radius: 5px;
        margin: 5px;
        padding: 5px 10px;
        font-size: 15px;
        background-color: rgb(60, 60, 60);
        color: rgb(220, 220, 220);
    }

    input:hover {
        border: none;
        outline: 3px solid rgb(100, 100, 100);
        background-color: rgb(60, 60, 60);
    }

    input:focus {
        outline: 3px solid rgb(100, 100, 100);
    }

    input[type="button"] {
        cursor: pointer;
    }
</style>
