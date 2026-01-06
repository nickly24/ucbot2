import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './ModeSelection.css'

const ModeSelection = () => {
  const navigate = useNavigate()

  return (
    <div className="mode-selection-page">
      <div className="page-container">
        <div className="page-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ←
          </button>
          <h1 className="page-title">Выберите способ</h1>
        </div>

        <div className="mode-cards">
          <div
            className="mode-card"
            onClick={() => navigate('/code-purchase')}
          >
            <div className="mode-card-icon">🎫</div>
            <h3 className="mode-card-title">Покупка кодов</h3>
            <p className="mode-card-description">
              Получите коды для самостоятельной активации
            </p>
            <div className="mode-card-arrow">→</div>
          </div>

          <div
            className="mode-card"
            onClick={() => navigate('/auto-activation')}
          >
            <div className="mode-card-icon">⚡</div>
            <h3 className="mode-card-title">Автоматическая активация</h3>
            <p className="mode-card-description">
              Пополнение через API UCodeium
            </p>
            <div className="mode-card-arrow">→</div>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  )
}

export default ModeSelection

