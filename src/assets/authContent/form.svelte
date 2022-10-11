<script>
    export let title
    export let alter
    export let email
    export let password
    export let handleSubmit
    export let swapPage
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h2>{title}</h2>
    <input type="email" id="username" bind:value={email} placeholder="Email Adress..." />
    <input type="password" id="password" bind:value={password} placeholder="Password..." />
    <input type="submit" value="Submit" />
    <input type="button" value={alter} class="alter" on:click={swapPage} />
</form>

<style>
    form {
        height: 375px;
        width: 400px;
        border-radius: 10px;
        background-color: rgb(56, 56, 56);
        color: rgb(220, 220, 220);
        display: flex;
        flex-direction: column;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    }

    h2 {
        display: block;
        font-size: 50px;
        line-height: 100px;
        margin: 0;
        border-bottom: 5px solid rgb(36, 36, 36);
    }

    input {
        font-size: 15px;
        line-height: 40px;
    }

    input[type="email"],
    input[type="password"] {
        display: block;
        width: 320px;
        padding: 0 20px;
        margin: 30px 20px 0;
        border: none;
        border-bottom: 3px solid rgb(36, 36, 36);
        outline: none;
        background-color: rgb(56, 56, 56);
    }

    input[type="email"]:hover,
    input[type="password"]:hover {
        border-bottom-color: rgb(100, 100, 100);
    }

    input[type="email"]:focus,
    input[type="password"]:focus {
        border-bottom-color: rgb(100, 100, 100);
    }

    input[type="submit"] {
        width: 150px;
        margin: 30px 125px 0;
        padding: 0 20px;
        border: none;
        outline: none;
        background-color: rgb(46, 46, 46);
        border-radius: 5px;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: rgb(100, 100, 100);
    }

    input[type="button"].alter {
        width: 100px;
        margin: 15px 0 0 300px;
        padding: 0;
        line-height: 20px;
        border: none;
        outline: none;
        background-color: inherit;
        cursor: pointer;
    }
</style>