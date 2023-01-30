<script setup lang="ts">
    import HelloWorld from './components/HelloWorld.vue'
    import Aside from './layout/Aside/Navbar.vue'
</script>

<template>
    <div id="container">
        <Aside id="left"/>
        <div id="right"></div>
    </div>

</template>

<style lang="scss">
    @import './assets/styles/index.scss';

    #container {
        display: flex;
        height: 100%;
        margin: 0;
        padding: 0;
    }


    #left {
        flex: none;
        width: 6.6%;
        background-color: white;
    }

    #right {
        flex: 1;
        width: 100px;
        background: palegoldenrod;
    }
</style>
