<script>
    import Form from "./authContent/form.svelte";
    import { register } from "./authContent/requests/register.svelte";
    import { login } from "./authContent/requests/login.svelte";

    export let token;
    export let userId;

    let page = 1;
    let email = "";
    let password = "";

    let handleSubmit = async () => {
        page ? await handleLogin() : await handleReg();
    };

    let swapPage = () => {
        page ? (page = 0) : (page = 1);
    };

    async function handleReg() {
        const res = await register(email, password);

        if (res["msg"]) {
            page = 1;
            email = "";
            password = "";
        }
    }

    async function handleLogin() {
        const res = await login(email, password);

        if (res["_id"] && res["email"] && res["token"]) {
            token = res["token"];
            userId = res["_id"];
        }
    }
</script>

{#if page == 0}
    <Form
        title="Register"
        alter="Login"
        bind:email
        bind:password
        bind:handleSubmit
        bind:swapPage
    />
{:else}
    <Form
        title="Login"
        alter="Register"
        bind:email
        bind:password
        bind:handleSubmit
        bind:swapPage
    />
{/if}

<style></style>
