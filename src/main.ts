import {createApp} from 'vue'
import App from './App.vue'
import {ls_video_in18} from './lang/index.ts'
import initPlugins from './plugins'
import 'virtual:svg-icons-register';
import router from './router'
import 'animate.css'
// 四版本以上一定要加这个否则会有些样式无法使用
import 'animate.css/animate.compat.css'

const app = createApp(App);
initPlugins(app)
app.use(ls_video_in18).use(router).mount('#app')
