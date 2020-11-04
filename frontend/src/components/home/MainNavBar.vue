<template>
    <div>



        <side-menu></side-menu>
    </div>

</template>

<script>
    import SideMenu from "./SideMenu";
    export default {
        name: "MainNavBar",
        components: {SideMenu}
    }
</script>

<style scoped>
    .menu_button{
        background:#2D83B6 ;
        width: 60px;
        height: 60px;
        line-height: 60px;
        display: inline-block;
        margin-right: 50px;
        padding-left: 10px;
        padding-right: 10px;
        vertical-align: top;
        color: #fff;
    }
    .menu_button .menu_toggle {
        background: #fff;
    }
    .menu_button .menu_toggle{
        left: 35px;
    }
    .menu_toggle{
        background: #222;
        height: 2px;
        width: 20px;
         /*display: inline-block;*/
        position: absolute;
        top: 50%;
        left: 10px;
        transform: scale(1) translateY(-50%);
        transition: transform .2s ease-out;
    }

</style>
