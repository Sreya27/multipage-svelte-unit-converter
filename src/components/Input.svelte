<script>
    import {tableData} from "../stores/stores";

    const table = $tableData;
    const inputHeading = table[0].name + " " + "Converter";

    let number1 = 0;
    let number2 = 0;

    const input1 = (num) => {
        number1 = num.target.value;
    }

    const input2 = (num) => {
        number2 = num.target.value;
    }
</script>

<div class="input-container">
    # Added for now just to check getting numbers or not will delete later
    <h1>This is {number1} {number2}</h1>
    <h2>{inputHeading}</h2>
    <div class="input-card">
        <div class="input-card-input">
            <form class="input-form">
                <input type="number" on:input={input1}>
                <div class="dropdown-menu">
                    <div class="dropdown-header">
                        <p>{table[0].units[0]}</p>
                        <i>&#8964;</i>
                    </div>
                    <div class="dropdown-list">
                        <ul class="input-dropdown">
                            {#each table[0].units as unit}
                                <li id="dropdown-item">{unit}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <div class="input-card-output">
            <form class="output-form">
                <input type="number" on:input={input2}>
                <div class="dropdown-menu">
                    <div class="dropdown-header">
                        <p>{table[0].units[0]}</p>
                        <i>&#8964;</i>
                    </div>
                    <div class="dropdown-list">
                        <ul class="output-dropdown">
                            {#each table[0].units as unit}
                                <li id="dropdown-item">{unit}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
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
    .input-form, .output-form {
        border-radius: 15px;
    }
    input {
        width: 20vw;
        height: 10vw;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 0;
    }
    .input-dropdown,.output-dropdown {
        margin: 0;
        padding: 1%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 0;
    }
    .dropdown-header {
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 1%;
    }
    .dropdown-list {
        display: none;
    }
    li {
        list-style: none;
    }
    li:hover {
        background-color: white;
    }
    p {
        margin: 1% 0 0 0;
    }
    .dropdown-menu:hover .dropdown-header {
        display: none;
    }
    .dropdown-menu:hover .dropdown-list {
        display: block;
        background-color: #eeeeee;
    }

    @media screen and (min-width: 769px) {
        .input-container {
            min-width: 50%;
            max-width: 700px;
            margin: 0 1% 1% 1%;
        }
    }
</style>