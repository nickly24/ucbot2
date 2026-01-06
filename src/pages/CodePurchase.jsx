import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './CodePurchase.css'

const CODE_OPTIONS = [
  { id: 1, value: 60, price: 50 },
  { id: 2, value: 325, price: 250 },
  { id: 3, value: 660, price: 500 },
  { id: 4, value: 1800, price: 1300 },
  { id: 5, value: 3850, price: 2700 },
  { id: 6, value: 8100, price: 5500 },
]

const CodePurchase = () => {
  const navigate = useNavigate()
  const [quantities, setQuantities] = useState({})

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

  const getTotalCodes = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0)
  }

  const hasItems = getTotalCodes() > 0

  return (
    <div className="code-purchase-page">
      <div className="page-container">
        <div className="page-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ←
          </button>
          <h1 className="page-title">Покупка кодов</h1>
        </div>

        <div className="code-cards">
          {CODE_OPTIONS.map((code, index) => {
            const quantity = quantities[code.id] || 0
            return (
              <div
                key={code.id}
                className={`code-card ${quantity > 0 ? 'selected' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="code-card-content">
                  <div className="code-card-info">
                    <h3 className="code-card-value">{code.value} UC</h3>
                    <p className="code-card-price">{code.price} ₽</p>
                  </div>
                  <div className="code-card-controls">
                    <button
                      className="code-card-btn minus"
                      onClick={() => updateQuantity(code.id, -1)}
                      disabled={quantity === 0}
                    >
                      −
                    </button>
                    <span className="code-card-quantity">{quantity}</span>
                    <button
                      className="code-card-btn plus"
                      onClick={() => updateQuantity(code.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button className="my-codes-button" onClick={() => navigate('/my-codes')}>
          Мои коды
        </button>
      </div>

      {hasItems && (
        <div className="purchase-bar">
          <div className="purchase-bar-info">
            <div className="purchase-bar-total">
              <span className="purchase-bar-label">Итого:</span>
              <span className="purchase-bar-price">{getTotalPrice()} ₽</span>
            </div>
            <div className="purchase-bar-codes">
              {getTotalCodes()} {getTotalCodes() === 1 ? 'код' : 'кодов'}
            </div>
          </div>
          <button
            className="btn btn-primary purchase-bar-button"
            onClick={() => navigate('/code-cart')}
          >
            Купить
          </button>
        </div>
      )}

      <BottomBar />
    </div>
  )
}

export default CodePurchase

