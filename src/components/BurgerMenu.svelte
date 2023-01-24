<script>
    import {tableData} from "../stores/stores";
    
    let table = $tableData;
    let selected = false;
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="burger-menu" class:selected on:click={() => selected = !selected}>
    <span></span>
    <span></span>
    <span></span>
    <ul class="burger-menu-list">
        {#each table as tableItem}
            <li><a href="/" id="{tableItem.id}">{tableItem.name}</a></li>
        {/each}
    </ul>
</div>


<style>
    li {
        list-style: none;
        padding: 10%
    }
    .burger-menu span {
        display: block;
        width: 30px;
        height: 4px;
        margin-bottom: 4px;
        position: relative;
        background: black;
        border-radius: 3px;
        z-index: 1;
    }
    .burger-menu-list {
        display: none;
    }
    .burger-menu {
        display: block;
        position: initial;
        /* background-color: #eeeeee; */
        /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
        top: 2%;
        right: 2%;
        z-index: 1;
    }
    /* div.burger-menu.selected{
        display: block;
        position: relative;
        background-color: #eeeeee;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    } */
    /* input {
        position: absolute;
        opacity: 0;
    } */
    div.burger-menu.selected ul {
        display: flow-root;
        position: absolute;
        background-color: #eeeeee;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        float: right;
        top: 20%;
        right: 0%;
        z-index: 1;
        padding: 2%;
    }
    li {
        font-size: 3vw;
    }
    li:hover {
        background-color: #eeeeee;
        border-radius: 10px;
    }
    a {
        text-decoration: none;
        color: black;
    }

    @media screen and (min-width: 769px) {
        .burger-menu {
            display: none;
        }
    }

</style>

