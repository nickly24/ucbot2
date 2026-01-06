import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './CodeCart.css'

const CODE_OPTIONS = [
  { id: 1, value: 60, price: 50 },
  { id: 2, value: 325, price: 250 },
  { id: 3, value: 660, price: 500 },
  { id: 4, value: 1800, price: 1300 },
  { id: 5, value: 3850, price: 2700 },
  { id: 6, value: 8100, price: 5500 },
]

const CodeCart = () => {
  const navigate = useNavigate()
  const [quantities, setQuantities] = useState({
    1: 2,
    2: 1,
  })
  const [paymentMethod, setPaymentMethod] = useState('sbp')

  const updateQuantity = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 0
      const newValue = Math.max(0, current + delta)
      if (newValue === 0) {
        const { [id]: removed, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: newValue }
    })
  }

  const getTotalPrice = () => {
    return Object.entries(quantities).reduce((total, [id, qty]) => {
      const code = CODE_OPTIONS.find((c) => c.id === parseInt(id))
      return total + (code ? code.price * qty : 0)
    }, 0)
  }

  const cartItems = Object.entries(quantities)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const code = CODE_OPTIONS.find((c) => c.id === parseInt(id))
      return { ...code, quantity: qty }
    })

  const handleOpenChat = (url) => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.openTelegramLink(url)
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <div className="code-cart-page">
      <div className="page-container">
        <div className="page-header">
          <button
            className="back-button"
            onClick={() => navigate('/code-purchase')}
          >
            ←
          </button>
          <h1 className="page-title">Корзина</h1>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h3 className="cart-item-value">{item.value} UC</h3>
                <p className="cart-item-price">{item.price} ₽</p>
              </div>
              <div className="cart-item-controls">
                <button
                  className="cart-item-btn minus"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  −
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button
                  className="cart-item-btn plus"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
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
          <span className="cart-total-price">{getTotalPrice()} ₽</span>
        </div>
        <button
          className="btn btn-primary cart-pay-button"
          onClick={() => {
            alert('Переход на оплату (будет реализовано позже)')
          }}
        >
          Оплатить
        </button>
      </div>

      <BottomBar />
    </div>
  )
}

export default CodeCart

