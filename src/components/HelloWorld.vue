<script setup lang="ts">
    import {ref} from 'vue'
    import {useI18n} from "vue-i18n";

    const {t, locale} = useI18n();
    console.log(t("action"));

    const switchLanguage = () => {
        if (locale.value === "zh") {
            locale.value = "en"
        } else {
            locale.value = "zh"
        }
    }

    const win: any = window;
    const platform = win.electronAPI.platform;
    const rspFromMainValue = ref();
    const ipcRenderOnCallBack = (_: any, data: any) => {
        rspFromMainValue.value = data.message;
    }
    win.electronAPI.rspToRender(ipcRenderOnCallBack);
    const sendToMain = () => {
        win.electronAPI.ipcRenderer.send('sendToMain', "来自渲染进程的消息");
    };
    defineProps<{ msg: string }>()
    const count = ref(0)
</script>

<template>
    <span>{{ msg }}</span>
    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
    </div>
    <div>来自预加载脚本的数据 {{platform}}</div>
    <div class="card">
        <button type="button" @click="sendToMain">点击发送消息给主进程</button>
    </div>
    <div>来自electron主进程的消息: {{rspFromMainValue}}</div>
    <button type="button" @click="switchLanguage">点击切换language</button>

    <div><span> 此数据来自于 vue-i18n {{ $t("action") }}/ {{locale}} </span></div>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>
