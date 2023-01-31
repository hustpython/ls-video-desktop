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
        margin: 0;
        padding: 0;
        width: 1.3em;
        height: 1.3em;
        fill: currentColor;
        color: var(--color-blue);
        vertical-align: middle;
    }
</style>
