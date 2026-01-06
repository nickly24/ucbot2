import { useState, useCallback } from 'react'
import { miniApp } from '@telegram-apps/sdk'

export const useTelegram = () => {
  const [tg, setTg] = useState(null)

  const initTelegram = useCallback(() => {
    try {
      console.log('initTelegram вызван')
      console.log('miniApp доступен:', miniApp?.isAvailable?.())

      if (miniApp && miniApp.isAvailable && miniApp.isAvailable()) {
        setTg(miniApp)
        console.log('miniApp установлен')

        const applyTheme = () => {
          document.documentElement.style.setProperty('--tg-theme-bg-color', '#1a1a1a')
          document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff')
          document.documentElement.style.setProperty('--tg-theme-hint-color', '#999999')
          document.documentElement.style.setProperty('--tg-theme-link-color', '#FF69B4')
          document.documentElement.style.setProperty('--tg-theme-button-color', '#FF69B4')
          document.documentElement.style.setProperty('--tg-theme-button-text-color', '#ffffff')
          document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#2a2a2a')

          document.body.style.backgroundColor = '#1a1a1a'
          document.body.style.color = '#ffffff'
        }

        applyTheme()
      } else {
        console.log('miniApp не доступен, используем дефолтные настройки')
        document.documentElement.style.setProperty('--tg-theme-bg-color', '#1a1a1a')
        document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff')
        document.documentElement.style.setProperty('--tg-theme-hint-color', '#999999')
        document.documentElement.style.setProperty('--tg-theme-link-color', '#FF69B4')
        document.documentElement.style.setProperty('--tg-theme-button-color', '#FF69B4')
        document.documentElement.style.setProperty('--tg-theme-button-text-color', '#ffffff')
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#2a2a2a')
        document.body.style.backgroundColor = '#1a1a1a'
        document.body.style.color = '#ffffff'
      }
    } catch (error) {
      console.error('Ошибка инициализации Telegram:', error)
      document.documentElement.style.setProperty('--tg-theme-bg-color', '#1a1a1a')
      document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff')
      document.body.style.backgroundColor = '#1a1a1a'
      document.body.style.color = '#ffffff'
    }
  }, [])

  return {
    tg,
    initTelegram,
  }
}

