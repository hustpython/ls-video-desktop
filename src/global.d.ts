import {AppEventTypes} from './event'

declare global {
    interface Window {
        electronAPI: void
        app_event: AppEventTypes
    }
}

// declare const userApiPath: string