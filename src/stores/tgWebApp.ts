import { defineStore } from "pinia"
import router from "../router"
import { TelegramWebApps } from '../types/telegram'

declare global {
    interface Window {
        Telegram: TelegramWebApps.SDK
    }
}

export const useTgWebApp = defineStore('webApp', () => {
    const webApp = window.Telegram.WebApp

    const ready = () => {
        webApp.ready()
        webApp.expand()
    }

    const isPlatform = (name: string) => webApp.platform === name
    const isPlatformUnknown = isPlatform('unknown')
    const canSendData = !isPlatformUnknown && webApp.initData === ''


    const showMainButton = (text: string, fn: () => void) => {
        webApp.MainButton.isVisible = true;
        webApp.MainButton.text = text;
        webApp.MainButton.onClick(fn)
    }
    const hideMainButton = () => {
        webApp.MainButton.hide()
    }
    const offMainButtonEventListener = (fn: () => void) => {
        webApp.MainButton.offClick(fn)
    }

    const viewportStableHeight = webApp.viewportStableHeight


    webApp.BackButton.onClick(() => {
        if (window.history.length) {
            router.go(-1);
          } else {
            router.push({ name: 'user' });
          }
    })
    const showBack = () => {
        webApp.BackButton.show()
    }
    const hideBack = () => {
        webApp.BackButton.hide()
    }

    return {
        ready,
        close,
        isPlatform,
        isPlatformUnknown,
        canSendData,
        showBack,
        hideBack,
        showMainButton,
        hideMainButton,
        offMainButtonEventListener,
        viewportStableHeight
    }

})