<script setup lang="ts">
    import HelloWorld from './components/HelloWorld.vue'
    import Aside from './layout/Aside/Navbar.vue'
    import View from './layout/View/View.vue'
</script>

<template>
    <div id="container">
        <Aside id="left"/>
        <div id="right">
            <div>
                <View/>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    #container {
        display: flex;
        height: 100%;
        margin: 0;
        padding: 0;
    }


    #left {
        flex: none;
        width: 6.6%;
        background-color: $color-blue-3;
    }

    #right {
        flex: 1;
        width: 100px;
        background: $color-blue-5;
        border-top-left-radius: $radius-border;
        border-bottom-left-radius: $radius-border;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    }
</style>
