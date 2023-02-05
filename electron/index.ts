import {app, BrowserWindow, Menu, ipcMain} from 'electron'
import path from 'path'
//app 控制应用程序的事件生命周期。
//BrowserWindow 创建并控制浏览器窗口。

let win: BrowserWindow | null;
//定义全局变量获取 窗口实例

const createWindow = () => {
    Menu.setApplicationMenu(null) // null值取消顶部菜单栏
    win = new BrowserWindow({
        transparent: true,
        frame: false,
        icon: path.resolve(__dirname, 'logo.png'),
        webPreferences: {
            webSecurity: false,
            devTools: true,
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.resolve(__dirname, 'preload.js')
        }
    })
    if (app.isPackaged) {
        win.loadFile(path.join(__dirname, "../dist/index.html"));
    } else {
        win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`)
    }
    win.webContents.openDevTools({mode: 'detach'});
    win.setProgressBar(0.5);
}
app.whenReady().then(createWindow);

ipcMain.on('sendToMain', (_, message) => {
    console.log('收到', message);
    win!.webContents.send('rspToRender', {message: "给render进程响应: " + Math.random().toString(36).substr(2)})
})

ipcMain.on('min', e => win!.minimize());
ipcMain.on('close', e => win!.close());