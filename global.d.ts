// src/types/global.d.ts
export interface IElectronAPI {
    platform: string;
    ipcRenderer: void;
}

declare global {
    interface Window {
        electronAPI: IElectronAPI;
    }
}