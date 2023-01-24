<script>
	import Input from "../components/Input.svelte";
    import Nav from "../components/Nav.svelte";
    import Table from "../components/Table.svelte";

</script>

<Nav/>
<div class="display-body">
    <Input/>
    <Table/>
</div>

<style>
    .display-body{
        display: flex;
        flex-direction: column;
        padding: 5%;
        align-items: center;
    }

    @media screen and (min-width: 769px)
    {
        .display-body {
            padding: 2%;
            flex-direction: row;
            align-items: flex-start;
        }
    }
</style>
