// @ts-ignore
import Tips from './Tips.vue'
import {createApp} from 'vue'

const addAutoCloseTimer = (instance: any, time: any) => {
    if (!time) return
    if (instance.autoCloseTimer) clearTimeout(instance.autoCloseTimer)
    instance.autoCloseTimer = setTimeout(() => {
        instance.cancel()
    }, time)
}
const clearAutoCloseTimer = (instance: any) => {
    if (!instance.autoCloseTimer) return
    clearTimeout(instance.autoCloseTimer)
    instance.autoCloseTimer = null
}

// @ts-ignore
export default ({position, message, autoCloseTime} = {}, props) => {
    if (!position) return
    let app: any = createApp(Tips, {
        afterLeave() {
            app.unmount()
            app = null
        },
    })

    let instance = app.mount(document.createElement('div'))

    // Tips实例挂载到刚创建的div
    // 属性设置
    instance.visible = true
    instance.message = message
    instance.position.top = position.top
    instance.position.left = position.left

    // 将Tips的DOM挂载到body上
    document.body.appendChild(instance.$el)

    instance.cancel = () => {
        props.beforeClose(instance)
        clearAutoCloseTimer(instance)
        instance.visible = false
        instance = null
    }

    instance.setTips = (tips: any) => {
        addAutoCloseTimer(instance, autoCloseTime)
        instance.message = tips
    }

    addAutoCloseTimer(instance, autoCloseTime)

    return instance
}

