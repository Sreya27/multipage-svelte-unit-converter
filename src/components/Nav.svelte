<script>
    import BurgerMenu from "./BurgerMenu.svelte";
    import NavList from "./NavList.svelte";

</script>

<div class="navbar">
    <nav>
        <a href="/" class="logo"><img id="logo-img" alt="logo symbol" src="https://drive.google.com/uc?export=view&id=1mrd6vE72fmDKJeVXrrVbOzxcXz93TSmJ"/></a>
        <NavList/>
        <BurgerMenu/>
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
		width: 140px;
	}
    
    @media screen and (min-width: 769px)
    {
        .navbar {
            padding: 2%;
        }
        .logo img {
            width: 20vw;
        }
    }
</style>