<script>
    import CommentButton from "./commentContent/commentButton.svelte";

    export let editor;
    export let comments;

    let current = -1;
    let rows = 1;
    let add = 1;

    function updrow() {
        let br = editor.innerHTML.match(/br>+./g);

        if (!br) {
            br = ["<"];
        }

        if (br[br.length - 1].slice(-1) != "<") {
            br.push("<");
        }

        return br.length;
    }

    function handleSelection(index) {
        if (index == current) {
            current = -1;
        } else if (comments[index + 1]) {
            current = index;
            add = 0;
        } else {
            comments[index + 1] = "";
            current = index;
            add = 1;
        }
    }

    addEventListener("keyup", (event) => {
        if (
            event.key == " " ||
            event.key == "Enter" ||
            event.key == "Backspace"
        ) {
            rows = updrow();
        }
    });

    $: comments, (rows = updrow());
</script>

<div class="commentcontainer">
    {#each Array(rows) as row, index}
        <div class="sectioncontainer">
            <div class="buttoncontainer" style="top:{104 + index * 24}px;">
                <button
                    class="button {current == index ? 'white' : ''}"
                    on:click={() => handleSelection(index)}
                >
                    <div class="circle">
                        <div
                            class="innercircle {current == index ||
                            comments[index + 1]
                                ? 'white'
                                : ''}"
                        />
                    </div>
                </button>
                {#if current == index}
                    <CommentButton bind:add bind:text={comments[index + 1]} />
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    div.commentcontainer {
        position: absolute;
    }

    div.sectioncontainer {
        position: relative;
    }

    div.buttoncontainer {
        position: absolute;
        left: -40px;
    }

    button {
        outline: none;
        border: none;
        padding: 0;
        height: 20px;
        width: 20px;
        background-color: rgb(86, 86, 86);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle {
        height: 14px;
        width: 14px;
        background-color: rgb(36, 36, 36);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .innercircle {
        height: 6px;
        width: 6px;
        background-color: rgb(86, 86, 86);
        border-radius: 50%;
        text-align: center;
        color: rgb(220, 220, 220);
        line-height: 20px;
    }

    button:hover {
        outline: none;
        border: none;
        background-color: rgb(200, 200, 200);
    }

    button.white,
    div.white {
        background-color: rgb(200, 200, 200);
        color: rgb(0, 0, 0);
    }
</style>
