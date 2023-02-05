<template>
    <div class="searchView">
        <div class="header">
            <ul>
                <li
                        v-for="(item,index) in header"
                        :class="{active:selectIndex===index}"
                        @click="selectIndex = index">

                    <span class="label">{{ item }}</span>
                </li>
            </ul>
        </div>

        <div class="noitem_label">
            <p>翩若惊鸿，婉若游龙。<br><br> 愿所有美好如期而至！~~😉</p>
        </div>

    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const header = ["本地视频", "本地合集", "TMDB", "剪辑信息", "评论信息", "影评信息"];
    const selectIndex = ref(0);
</script>

<style scoped lang="scss">
    .searchView {
        .header {
            justify-content: space-between;

            ul {
                display: flex;
                flex-flow: row nowrap;
                font-size: 12px;
                gap: 25px;
                padding: 0;
            }

            li {
                display: block;
                cursor: pointer;
                transition: color $transition-normal;

                &:hover {
                    color: $color-blue;
                }

                &.active {
                    color: $color-blue;
                    cursor: default;

                    > .label {
                        &:after {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                }
            }
        }
    }

    .label {
        display: block;
        position: relative;
        padding-bottom: 8px;

        &:after {
            display: block;
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            opacity: 0;
            border-radius: 2px;
            transform: translateY(-4px);
            background-color: $color-blue;
            transition-property: transform, opacity;
            transition: $transition-normal;
        }
    }

    .noitem_label {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            margin-top: -120px;
            margin-left: -100px;
            font-size: 18px;
            color: rgb(155, 155, 155);
            text-align: center;
        }
    }
</style>