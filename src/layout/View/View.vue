<template>
    <div :class="view">
        <router-view v-slot="{ Component }">
            <component :is="Component" class="view-container"/>
        </router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .view {
        position: relative;
        z-index: 1;

        > :global(.view-container) {
            position: absolute !important;
            height: 100%;
            width: 100%;
        }

        // background: #fff;
        // overflow: hidden;
    }
</style>