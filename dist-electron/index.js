"use strict";const n=require("electron"),o=require("path");let e;const r=()=>{n.Menu.setApplicationMenu(null),e=new n.BrowserWindow({transparent:!0,frame:!1,webPreferences:{devTools:!0,contextIsolation:!0,nodeIntegration:!0,preload:o.resolve(__dirname,"preload.js")}}),n.app.isPackaged?e.loadFile(o.join(__dirname,"../dist/index.html")):e.loadURL(`${process.env.VITE_DEV_SERVER_URL}`),e.webContents.openDevTools({mode:"detach"})};n.app.whenReady().then(r);n.ipcMain.on("sendToMain",(s,t)=>{console.log("收到",t),e.webContents.send("rspToRender",{message:"给render进程响应: "+Math.random().toString(36).substr(2)})});
