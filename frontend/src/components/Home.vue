<template>
    <div>
<!--        <SideMenu/>-->
        <main-nav></main-nav>
    </div>

</template>


<script>
    import MainNav from '../components/home/MainNavBar'
    import SideMenu from "./home/SideMenu";


    export default {
        name: "Home",

        components:{
            SideMenu,
            MainNav
        }
    }
</script>

<style scoped>

</style>
