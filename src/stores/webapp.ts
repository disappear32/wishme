import { defineStore } from "pinia"
import router from "../router"
import { TelegramWebApps } from '../types/telegram'

declare global {
    interface Window {
        Telegram: TelegramWebApps.SDK
    }
}

export const useWebApp = defineStore('webapp', () => {
    const webapp = window.Telegram.WebApp

    const ready = () => {
        webapp.ready()
        webapp.expand()
    }

    const isPlatform = (name: string) => webapp.platform === name
    const isPlatformUnknown = isPlatform('unknown')
    const canSendData = !isPlatformUnknown && webapp.initData === ''


    const showMainButton = (text: string, fn: () => void) => {
        webapp.MainButton.isVisible = true;
        webapp.MainButton.text = text;
        webapp.MainButton.onClick(fn)
    }
    const hideMainButton = () => {
        webapp.MainButton.hide()
    }
    const offMainButtonEventListener = (fn: () => void) => {
        webapp.MainButton.offClick(fn)
    }

    const viewportStableHeight = webapp.viewportStableHeight


    webapp.BackButton.onClick(() => {
        if (window.history.length) {
            router.go(-1);
          } else {
            router.push({ name: 'user' });
          }
    })
    const showBack = () => {
        webapp.BackButton.show()
    }
    const hideBack = () => {
        webapp.BackButton.hide()
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