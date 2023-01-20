<script>
    import {tableData} from "../stores/stores";
</script>

<div class="conversion-table">
    <table>
        <thead>
            <tr>
                <th>{$tableData[0].from}</th>
                <th>{$tableData[0].to}</th>
            </tr>
        </thead>
        <tbody>
            {#each $tableData[0].data as [fromVal, toVal]}
                <tr>
                    <td>{fromVal}</td>
                    <td>{toVal}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .conversion-table {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10%;
    }
    tr:nth-of-type(odd) { 
        background: #eee; 
    }
    th { 
        background: #333; 
        color: white; 
        font-weight: bold;
    }
    td, th { 
        padding: 12px 20px; 
        border: 1px solid #ccc; 
        text-align: left; 
    }
    table {
        min-width: 50vw;
        width: 10%;
    }

    @media screen and (min-width: 769px) {
        table {
            min-width: 40vw;
        }
        .conversion-table {
            flex-grow: 1;
            margin: 0;
            flex-direction: column;
            margin-right: 1%;
        }
    }
</style>

