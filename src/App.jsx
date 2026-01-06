import React from 'react'
import './App.css'

// Временный простой рендер для проверки, что React вообще что‑то показывает в Telegram
function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkred',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
    >
      Тестовый экран App.jsx
    </div>
  )
}

export default App