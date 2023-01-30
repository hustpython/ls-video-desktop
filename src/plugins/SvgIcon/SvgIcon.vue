<template>
    <svg class="svgClass">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script setup lang="ts">
    import {computed} from 'vue'

    const props = defineProps({
        name: {
            type: String,
            required: true
        },
    })
    const iconName = computed(() => `#icon-${props.name}`)
</script>

<style>
    .svgClass {
        width: 2em;
        height: 2em;
        fill: currentColor;
        color: red;
        vertical-align: middle;
    }
</style>
