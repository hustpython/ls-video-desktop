<template>
    <div class="menu">
        <div class="lslog">L S</div>
        <ul class="list">
            <li class="navItem" v-for="item in menus">
                <div class="icon" :aria-label="item.tips">
                    <svg-icon :name="item.icon"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

    import {computed} from 'vue';
    import {useI18n} from "vue-i18n";

    const {t} = useI18n();

    const menus = computed(() => {
        return [
            {
                to: '/search',
                tips: t('action'),
                icon: 'search',
                enable: true,
            },
            {
                to: '/setting',
                tips: t('action'),
                icon: 'setting',
                enable: true,
            },
            {
                to: '/favorite',
                tips: t('action'),
                icon: 'favorite',
                enable: true,
            },
            {
                to: '/home',
                tips: t('action'),
                icon: 'home',
                enable: true,
            },
            {
                to: '/chart',
                tips: t('action'),
                icon: 'chart',
                enable: true,
            },
            {
                to: '/download',
                tips: t('action'),
                icon: 'download',
                enable: true,
            },
        ].filter(m => m.enable)
    })
</script>

<style scoped lang="scss">
    .menu {
        -webkit-app-region: drag;
        flex-flow: column nowrap;
        flex: auto;
        position: relative;
        cursor: pointer;
        text-align: center;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;

        .lslog {
            box-sizing: border-box;
            padding: 0;
            height: 60px;
            opacity: .6;
            flex: none;
            text-align: center;
            line-height: 60px;
            font-weight: bold;
            color: green;
        }

        .list {
            -webkit-app-region: no-drag;
            margin: 0;

            &:last-child {
                margin-bottom: 150px;
            }

            .navItem {
                &:before {
                    content: '';
                    display: block;
                    width: 100%;
                    padding-bottom: 51%;
                }

                &:first-child:before {
                    padding-bottom: 0;
                }

                .icon {
                    & > svg {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>