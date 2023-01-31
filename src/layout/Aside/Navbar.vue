<template>
    <div class="menu">
        <div class="lslog">L S</div>
        <ul class="list">
            <router-link
                    v-for="item in menus"
                    :to="item.to" :aria-label="item.tips"

            >

                <svg-icon class="navItem" :name="item.icon"/>


            </router-link>
        </ul>
    </div>
</template>

<script setup>

    import {computed} from 'vue';
    import {useI18n} from "vue-i18n";

    const {t} = useI18n();

    const menus = computed(() => {
        return [
            {
                to: '/search',
                tips: t('search'),
                icon: 'search',
                enable: true,
            },
            {
                to: '/setting',
                tips: t('setting'),
                icon: 'setting',
                enable: true,
            },
            {
                to: '/favorite',
                tips: t('favorite'),
                icon: 'favorite',
                enable: true,
            },
            {
                to: '/home',
                tips: t('home'),
                icon: 'home',
                enable: true,
            },
            {
                to: '/chart',
                tips: t('chart'),
                icon: 'chart',
                enable: true,
            },
            {
                to: '/download',
                tips: t('download'),
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
            flex: none;
            text-align: center;
            line-height: 60px;
            font-weight: bold;
            color: $color-blue;
            font-size: 18px;
        }

        .list {
            -webkit-app-region: no-drag;
            margin: 0;

            &:last-child {
                margin-bottom: 150px;
            }
        }
    }

    .navItem {
        width: 100%;
        padding-top: $bar-top-px;
        padding-bottom: $bar-top-px;
        transition: $transition-normal;
        transition-property: background-color;

        &:hover {
            background-color: $color-blue-3;
        }
    }

    .icon {
        & > svg {
            width: 100%;
        }
    }


    .exact_active {
        margin: 0;
        transition: $transition-normal;
        transition-property: background-color;
        padding-top: calc($bar-top-px - 2.5px);
        padding-bottom: calc($bar-top-px + 1px);
        background-color: $color-blue-3;
    }

</style>