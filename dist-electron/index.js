"use strict";const n=require("electron"),o=require("path");let e;const t=()=>{n.Menu.setApplicationMenu(null),e=new n.BrowserWindow({transparent:!0,frame:!1,icon:o.resolve(__dirname,"logo.png"),webPreferences:{webSecurity:!1,devTools:!0,contextIsolation:!0,nodeIntegration:!0,preload:o.resolve(__dirname,"preload.js")}}),n.app.isPackaged?e.loadFile(o.join(__dirname,"../dist/index.html")):e.loadURL(`${process.env.VITE_DEV_SERVER_URL}`),e.webContents.openDevTools({mode:"detach"}),e.setProgressBar(.5)};n.app.whenReady().then(t);n.ipcMain.on("sendToMain",(r,s)=>{console.log("收到",s),e.webContents.send("rspToRender",{message:"给render进程响应: "+Math.random().toString(36).substr(2)})});n.ipcMain.on("min",r=>e.minimize());n.ipcMain.on("close",r=>e.close());
