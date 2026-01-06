import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './AutoCart.css'

const AutoCart = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedPack] = useState(
    location.state?.selectedPack || { id: 1, value: 60, price: 50 },
  )
  const [playerId, setPlayerId] = useState('')
  const [showUidHelp, setShowUidHelp] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('sbp')
  const [playerInfo, setPlayerInfo] = useState(null)
  const [checkingId, setCheckingId] = useState(false)

  const handleOpenChat = (url) => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.openTelegramLink(url)
    } else {
      window.open(url, '_blank')
    }
  }

  const handleCheckId = async () => {
    if (!playerId || !playerId.startsWith('5')) {
      alert('Player ID должен начинаться с цифры 5')
      return
    }

    setCheckingId(true)
    setTimeout(() => {
      setPlayerInfo({
        nickname: `Player${playerId.slice(-4)}`,
        region: 'EU',
      })
      setCheckingId(false)
    }, 1000)
  }

  const isValidPlayerId = playerId.startsWith('5') && playerId.length >= 9

  return (
    <div className="auto-cart-page">
      <div className="page-container">
        <div className="page-header">
          <button
            className="back-button"
            onClick={() => navigate('/auto-activation')}
          >
            ←
          </button>
          <h1 className="page-title">Корзина</h1>
        </div>

        <div className="selected-pack-card">
          <div className="pack-card-content">
            <h3 className="pack-card-value">{selectedPack.value} UC</h3>
            <p className="pack-card-price">{selectedPack.price} ₽</p>
          </div>
        </div>

        <div className="player-id-section">
          <div className="player-id-header">
            <label className="player-id-label">PUBG UID</label>
            <button
              className="help-button"
              onClick={() => setShowUidHelp(!showUidHelp)}
            >
              <span className="help-icon">?</span>
            </button>
          </div>

          {showUidHelp && (
            <div className="help-popup">
              <p>
                Player ID можно найти в настройках игры PUBG Mobile. Обычно он
                начинается с цифры 5 и состоит из 9-10 цифр.
              </p>
            </div>
          )}

          <div className="player-id-input-group">
            <input
              type="text"
              className="player-id-input"
              placeholder="Введите Player ID"
              value={playerId}
              onChange={(e) => {
                setPlayerId(e.target.value)
                setPlayerInfo(null)
              }}
            />
            <button
              className="btn btn-secondary check-id-button"
              onClick={handleCheckId}
              disabled={!isValidPlayerId || checkingId}
            >
              {checkingId ? 'Проверка...' : 'Проверить ID'}
            </button>
          </div>

          {playerInfo && (
            <div className="player-info">
              <p className="player-info-text">
                <strong>Никнейм:</strong> {playerInfo.nickname}
              </p>
              <p className="player-info-text">
                <strong>Регион:</strong> {playerInfo.region}
              </p>
            </div>
          )}
        </div>

        <div className="payment-methods">
          <h3 className="section-title">Способы оплаты</h3>
          <div className="payment-options">
            <button
              className={`payment-option ${
                paymentMethod === 'sbp' ? 'active' : ''
              }`}
              onClick={() => setPaymentMethod('sbp')}
            >
              <span className="payment-icon">💳</span>
              <span className="payment-name">СБП</span>
            </button>
            <button
              className={`payment-option ${
                paymentMethod === 'card' ? 'active' : ''
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <span className="payment-icon">💳</span>
              <span className="payment-name">Мир / Visa / Mastercard</span>
            </button>
          </div>
        </div>

        <div className="support-section">
          <button
            className="support-button"
            onClick={() => handleOpenChat('https://t.me/MISS_uc_manager')}
          >
            💬 Тех. поддержка
          </button>
        </div>

        <div className="footer-info">
          <p className="footer-text">
            Политика конфиденциальности и пользовательское соглашение
          </p>
          <p className="footer-text">Касса: CodeePay</p>
        </div>
      </div>

      <div className="cart-bottom-bar">
        <div className="cart-total">
          <span className="cart-total-label">Итого:</span>
          <span className="cart-total-price">{selectedPack.price} ₽</span>
        </div>
        <button
          className="btn btn-primary cart-pay-button"
          onClick={() => {
            if (!playerId || !isValidPlayerId) {
              alert('Пожалуйста, введите корректный Player ID')
              return
            }
            alert('Переход на оплату (будет реализовано позже)')
          }}
          disabled={!isValidPlayerId}
        >
          Оплатить
        </button>
      </div>

      <BottomBar />
    </div>
  )
}

export default AutoCart

