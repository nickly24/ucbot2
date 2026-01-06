import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './MyCodes.css'

const MyCodes = () => {
  const navigate = useNavigate()
  const [showInstructions, setShowInstructions] = useState(false)

  const codes = [
    { id: 1, code: 'ABC123XYZ456', value: 60, date: '01.12.2025', used: false },
    { id: 2, code: 'DEF789UVW012', value: 325, date: '01.12.2025', used: false },
    { id: 3, code: 'GHI345RST678', value: 60, date: '30.11.2025', used: true },
  ]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.showAlert('Код скопирован!')
      } else {
        alert('Код скопирован!')
      }
    })
  }

  return (
    <div className="my-codes-page">
      <div className="page-container">
        <div className="page-header">
          <button className="back-button" onClick={() => navigate('/code-purchase')}>
            ←
          </button>
          <h1 className="page-title">Мои коды</h1>
        </div>

        <div className="instructions-section">
          <button
            className="instructions-button"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            <span className="instructions-icon">📖</span>
            <span className="instructions-text">Как активировать коды</span>
            <span className="instructions-arrow">{showInstructions ? '▼' : '▶'}</span>
          </button>

          {showInstructions && (
            <div className="instructions-content">
              <p>1. Откройте игру PUBG Mobile</p>
              <p>2. Перейдите в раздел "Магазин"</p>
              <p>3. Выберите "Пополнить UC"</p>
              <p>4. Введите код активации</p>
              <p>5. Подтвердите активацию</p>
            </div>
          )}
        </div>

        <button
          className="full-instructions-button"
          onClick={() => navigate('/instructions')}
        >
          Полная инструкция
        </button>

        {codes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎫</div>
            <p className="empty-text">У вас пока нет кодов</p>
          </div>
        ) : (
          <div className="codes-list">
            {codes.map((codeItem) => (
              <div
                key={codeItem.id}
                className={`code-item ${codeItem.used ? 'used' : ''}`}
              >
                <div className="code-item-header">
                  <div className="code-item-info">
                    <span className="code-item-value">{codeItem.value} UC</span>
                    <span className="code-item-date">{codeItem.date}</span>
                  </div>
                  {codeItem.used && (
                    <span className="code-item-status">Использован</span>
                  )}
                </div>
                <div className="code-item-code">
                  <span className="code-text">{codeItem.code}</span>
                  <button
                    className="copy-button"
                    onClick={() => copyToClipboard(codeItem.code)}
                    disabled={codeItem.used}
                  >
                    📋
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomBar />
    </div>
  )
}

export default MyCodes

