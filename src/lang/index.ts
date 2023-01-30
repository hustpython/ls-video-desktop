import zh_cn from './zh-cn.json'
import en_us from './en-us.json'

import {createI18n} from 'vue-i18n'

const messages = {
    zh: zh_cn,
    en: en_us,
}

const ls_video_in18 = createI18n({
    globalInjection: true, //全局生效$t
    locale: 'zh',
    messages,
    legacy: false,
})

export {
    ls_video_in18
}