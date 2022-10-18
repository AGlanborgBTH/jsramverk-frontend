<script>
    export let add;
    export let text;

    function handleClick() {
        text = ""

        if (add) {
            add = 0
        } else {
            add = 1
        }
    }
</script>

<div class="mainContainer">
    {#if !add}
        <input type="text" placeholder="Write comment..." bind:value={text} />
    {/if}
    <input
        type="button"
        value={add ? "Add" : "Remove"}
        on:click={() => handleClick()}
    />
</div>

<style>
    div.mainContainer {
        position: relative;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0);
        color: rgb(220, 220, 220);
        width: 0;
        margin-left: 11px;
    }

    input {
        border: none;
        outline: 3px solid rgb(100, 100, 100);
        padding: 5px;
        background-color: rgb(56, 56, 56);
        border-radius: 5px;
    }

    input[type="text"] {
        margin: 7px 0 0px -75px;
    }

    input[type="button"] {
        min-width: 66px;
        margin: 10px 0 0px -35px;
        cursor: pointer;
    }

    input:focus {
        border: none;
    }

    div {
        background-color: rgb(220, 220, 220);
        height: 20px;
        width: 100%;
        border-radius: 5px;
    }
</style>
