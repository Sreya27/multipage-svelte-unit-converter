<script>
    import {tableData} from "../stores/stores";
    let table = $tableData;
</script>

<ul>
    {#each table as tableItem}
        <li><a href="/">{tableItem.name}</a></li>
    {/each}
</ul>

<style>
    ul {
        display: none;
    }
    li {
        font-size: 1.5vw;
    }
    li:hover {
        background-color: #eeeeee;
        border-radius: 10px;
    }
    a {
        text-decoration: none;
        color: black;
    }

    @media screen and (min-width: 769px)
    {
        ul {
            display: flex;
            list-style: none;
            flex-grow: 1;
            justify-content: space-around;
            margin: 0;
        }
        li {
            padding: 1%;
        }
    }
</style>