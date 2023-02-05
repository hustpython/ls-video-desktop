<template>
    <div class="Topbar">
        <div class="search" :class='{active:focus}'>
            <input
                    v-model.trim="text"
                    type="text" :placeholder="$t('searchPlaceholder')"
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
                 style="position:absolute;left: 348px"
            >
                <svg-icon name="search"
                          class="svgSearch">
                </svg-icon>
            </div>
        </div>
        <div class="ctrlDiv">
            <button type="button" class="ctrlMin" :aria-label="$t('min')"
                    @click="handleCtrlClick('min')">
                <svg-icon
                        name="minus"
                >
                </svg-icon>
            </button>
            <button type="button" class="ctrlClose" :aria-label="$t('close')"
                    @click="handleCtrlClick('close')">
                <svg-icon name="close"
                >
                </svg-icon>
            </button>
        </div>


        <div v-if="searchList" class="searchList">
            <ul>
                <li
                        v-for="(item, index) in searchList"
                        :class="{select: selectIndex === index }"
                        @mouseenter="selectIndex = index"
                >
                    <span>{{ item }}</span>
                </li>
            </ul>
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

    const searchList = ref([]);

    const handleCtrlClick = (m) => {
        window.electronAPI.ipcRenderer.send(m);
    }

</script>

<style scoped lang="scss">
    .Topbar {
        -webkit-app-region: drag;
        padding-top: 15px;
        cursor: pointer;
        height: 50px;

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

                border-radius: $radius-border;

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

        .searchList {
            background-color: $color-blue-2;
            border-bottom-left-radius: $radius-border;
            border-bottom-right-radius: $radius-border;
            -webkit-app-region: no-drag;
            width: 310px;
            font-size: 13px;

        }
    }


    .ctrlDiv {
        position: fixed;
        padding: 0;
        top: 10px;
        right: 10px;
        text-align: center;
        align-items: center;


        -webkit-app-region: no-drag;

        .ctrlClose {
            margin-right: -2px;
            padding: 0;
            width: 40px;
            margin-top: -20px;
            height: 30px;

            &:hover {
                transition: background-color $transition-normal;
                background-color: $color-blue-5;
                border-top-right-radius: $radius-border;
            }
        }

        .ctrlMin {
            width: 40px;
            height: 30px;
            margin-top: -20px;

            &:hover {
                transition: background-color $transition-normal;
                background-color: $color-blue-2;
            }
        }


    }

</style>