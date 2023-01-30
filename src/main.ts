import {createApp} from 'vue'
import App from './App.vue'
import {ls_video_in18} from './lang/index.ts'
import initPlugins from './plugins'
import 'virtual:svg-icons-register';

const app = createApp(App);
initPlugins(app)
app.use(ls_video_in18).mount('#app')
