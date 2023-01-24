<script>
    import {tableData} from "../stores/stores";

    const table = $tableData;
    const tableItem = table[0];

    const inputHeading = tableItem.name + " " + "Converter";

</script>

<div class="input-container">
    <h2>{inputHeading}</h2>
    <div class="input-card">
        <div class="input-card-input">
            <input id="input-value" type="number">
            <select class="input-dropdown">
                {#each tableItem.units as unit}
                    <option value="{unit}">{unit}</option>
                {/each}
            </select>
        </div>
        <div class="input-card-output">
            <input id="output-value" type="number">
            <select class="output-dropdown">
                {#each tableItem.units as unit}
                    <option value="{unit}">{unit}</option>
                {/each}
            </select>
        </div>
    </div>
</div>

<style>
    .input-card-input, .input-card-output {
        display: flex;
        flex-direction: column;
    }
    .input-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        position: relative;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        background-color: #eeeeee;
        min-width: 70%;
        border-radius: 15px;
        padding: 1% 2% 2% 2%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h2 {
        text-align: center;
        margin-top: 0;
    }
    input {
        width: 20vw;
        height: 10vw;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 0;
        padding: 0;
    }
    .input-dropdown,.output-dropdown {
        width: 20vw;
        margin: 0;
        padding: 1%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 0;
        background-color: #eeeeee;
    }
    option {
        list-style: none;
    }
    option:hover {
        background-color: white;
    }
    p {
        margin: 1% 0 0 0;
    }
    
    @media screen and (min-width: 769px) {
        .input-container {
            min-width: 50%;
            max-width: 700px;
            margin: 0 1% 1% 1%;
        }
    }
</style>

