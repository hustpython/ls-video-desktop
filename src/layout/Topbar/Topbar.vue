<template>
    <div class="Topbar">
        <div class="search" :class='{active:focus}'>
            <input
                    v-model.trim="text"
                    type="text" placeholder="请搜索..."
                    @focus="handleFocus"
                    @blur="handleBlur">

            <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <div class="searchDiv" v-show="text"
                     @click="handleSearchClose">
                    <svg-icon name="close"
                              class="svgSearch">
                    </svg-icon>
                </div>
            </transition>

            <div class="searchDiv"
                 style="position:absolute;left: 345px">
                <svg-icon name="search"
                          class="svgSearch">
                </svg-icon>
            </div>

        </div>

    </div>
</template>

<script setup>
    import {ref} from 'vue';

    const focus = ref(false);
    const text = ref("");
    const handleFocus = () => {
        focus.value = true;
    }
    const handleBlur = () => {
        focus.value = false;
    }
    const handleSearchClose = () => {
        text.value = ""
    }

</script>

<style scoped lang="scss">
    .Topbar {
        -webkit-app-region: drag;
        padding-top: 15px;

        .active {
            transition: box-shadow .4s ease, background-color $transition-normal;
            box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .2);
        }

        .search {
            -webkit-app-region: no-drag;
            width: 310px;
            height: 30px;
            background-color: $color-blue-2;
            border-radius: $radius-border;

            input {
                width: 232px;
                height: 30px;
                background-color: transparent;
                margin-left: 6px;
                float: left;
            }

            .searchDiv {
                float: left;
                height: 30px;
                width: 30px;
                text-align: center;
                align-items: center;

                &:hover {
                    transition: background-color $transition-normal;
                    background-color: $color-blue-5;
                }

                .svgSearch {
                    margin-top: 4px;
                    height: 1.2em;
                    width: 1.2em;
                    text-align: center;
                    align-items: center;
                    background-color: transparent;
                    transition: height $transition-normal, width $transition-normal;
                }
            }


        }

    }
</style>