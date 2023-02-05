<template>
    <div class="menu">
        <div class="lslog">L S</div>
        <ul class="list">
            <router-link
                    v-for="(item,index) in menus"
                    :to="item.to" :aria-label="item.tips"
            >
                <svg-icon
                        class="navItem"
                        v-bind:class="{'exact_active':selectID===index}" :name="item.icon"
                        @click="selectID=index"
                />

            </router-link>
        </ul>
    </div>
</template>

<script setup>

    import {computed, ref} from 'vue';
    import {useI18n} from "vue-i18n";

    const {t} = useI18n();
    const selectID = ref(-1);
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
                margin-bottom: 180px;
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
            background-color: $color-blue-4;
            transition: box-shadow .4s ease, background-color $transition-normal;
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .2);
        }
    }

    .icon {
        & > svg {
            width: 100%;
        }
    }


    .exact_active {
        background-color: $color-blue-3;
    }


</style>