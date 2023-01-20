<script>

    import {tableData} from "../stores/stores";
    let table = $tableData;
    
</script>

<div class="navbar">
    <nav>
        <a href="/" class="logo"><img id="logo-img" alt="logo symbol" src="https://drive.google.com/uc?export=view&id=1mrd6vE72fmDKJeVXrrVbOzxcXz93TSmJ"/></a>
        <ul>
            {#each table as tableItem}
                <li><a href="/">{tableItem.name}</a></li>
            {/each}
        </ul>
        <button class="burger">
            <svg id="menu-bar" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path xmlns="http://www.w3.org/2000/svg" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z" fill="#0D0D0D"></path>
                </svg>
        </button>
    </nav>
</div>


<style>
    .navbar {
        display: flex;
    }
    nav {
        display: flex;
        position: relative;
        justify-content: space-between;
        background-color: white;
        flex-grow: 1;
    }
    .logo img{
        position: relative;
		top: 5px;
		width: 20vw;
	}
    svg {
        position: relative;
        top: 5px;
    }
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
        nav button {
            display: none;
        }
        li {
            padding: 1%;
        }
    }
</style>