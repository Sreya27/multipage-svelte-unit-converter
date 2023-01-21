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
            <li><a href="/">{tableItem.name}</a></li>
        {/each}
    </ul>
    <!-- <button class="burger" on:click={() => selected = !selected}>
        <svg id="menu-bar" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z" fill="#0D0D0D"></path>
            </svg>
    </button> -->
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

