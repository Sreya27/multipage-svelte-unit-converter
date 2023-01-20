<script>
    import {tableData} from "../stores/stores";

    const table = $tableData;
    const inputHeading = table[0].name + " " + "Converter";
</script>

<div class="input-container">
    <h2>{inputHeading}</h2>
    <div class="input-card">
        <div class="input-card-input">
            <form class="input-form">
                <input type="number">
            </form>
        </div>
        <div class="input-card-output">
            <form class="output-form">
                <input type="number">
            </form>
        </div>
    </div>
</div>

<style>
    .input-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .input-container {
        display: flex;
        flex-direction: column;
        background-color: #eeeeee;
        min-width: 70%;
        border-radius: 15px;
        padding: 1% 2% 2% 2%;
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

    @media screen and (min-width: 769px) {
        .input-container {
            min-width: 50%;
            max-width: 700px;
            margin: 0 1% 1% 1%;
        }
    }
</style>