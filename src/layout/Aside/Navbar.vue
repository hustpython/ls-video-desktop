<template>
    <div class="menu">
        <ul class="list">
            <li class="navItem" v-for="item in menus">
                <div class="icon">
                    <svg-icon name="search" :aria-label="item.tips"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

    import {computed} from 'vue';
    import {useI18n} from "vue-i18n";

    const {t} = useI18n();

    console.log(t('action'));

    const menus = computed(() => {
        return [
            {
                to: '/search',
                tips: t('action'),
                icon: 'search',
                enable: true,
            },
            {
                to: '/search',
                tips: t('action'),
                icon: 'search',
                enable: true,
            },
            {
                to: '/search',
                tips: t('action'),
                icon: 'search',
                enable: true,
            },
            {
                to: '/search',
                tips: t('action'),
                icon: 'search',
                enable: true,
            },
            {
                to: '/search',
                tips: t('action'),
                icon: 'search',
                enable: true,
            },
        ].filter(m => m.enable)
    })
</script>

<style scoped lang="scss">
    .menu {
        flex: auto;
        position: relative;
        cursor: pointer;
        text-align: center;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        .list {
            -webkit-app-region: no-drag;

            &:last-child {
                margin-bottom: 30px;
            }

            .navItem {

                &:before {
                    content: '';
                    display: block;
                    width: 100%;
                    padding-bottom: 84%;
                }

                .icon {

                    & > svg {
                        width:100%;
                    }
                }
            }
        }
    }
</style>