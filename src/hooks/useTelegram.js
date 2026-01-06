import { useState, useCallback } from 'react'
import { miniApp } from '@telegram-apps/sdk'

export const useTelegram = () => {
  const [tg, setTg] = useState(null)

  const initTelegram = useCallback(() => {
    try {
      console.log('initTelegram вызван')
      
      // В новом SDK miniApp всегда доступен после init(), просто используем его
      if (miniApp) {
        setTg(miniApp)
        console.log('miniApp установлен')
      }

      // Применяем тему в любом случае
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
    } catch (error) {
      console.error('Ошибка инициализации Telegram:', error)
      // Применяем тему даже при ошибке
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

