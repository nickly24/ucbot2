import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './AutoActivation.css'

const AUTO_PACKS = [
  { id: 1, value: 60, price: 50 },
  { id: 2, value: 120, price: 100 },
  { id: 3, value: 180, price: 150 },
  { id: 4, value: 325, price: 250 },
  { id: 5, value: 385, price: 300 },
  { id: 6, value: 660, price: 500 },
  { id: 7, value: 720, price: 550 },
  { id: 8, value: 985, price: 750 },
  { id: 9, value: 1200, price: 900 },
  { id: 10, value: 1485, price: 1100 },
  { id: 11, value: 1800, price: 1300 },
  { id: 12, value: 2125, price: 1550 },
  { id: 13, value: 2460, price: 1800 },
  { id: 14, value: 2785, price: 2050 },
  { id: 15, value: 3125, price: 2300 },
  { id: 16, value: 3850, price: 2700 },
  { id: 17, value: 4510, price: 3200 },
  { id: 18, value: 5170, price: 3700 },
  { id: 19, value: 5830, price: 4200 },
  { id: 20, value: 6490, price: 4700 },
  { id: 21, value: 7150, price: 5200 },
  { id: 22, value: 7810, price: 5700 },
  { id: 23, value: 8470, price: 6200 },
  { id: 24, value: 9130, price: 6700 },
  { id: 25, value: 9790, price: 7200 },
  { id: 26, value: 10450, price: 7700 },
  { id: 27, value: 11110, price: 8200 },
  { id: 28, value: 11770, price: 8700 },
]

const AutoActivation = () => {
  const navigate = useNavigate()

  const handlePackSelect = (pack) => {
    navigate('/auto-cart', { state: { selectedPack: pack } })
  }

  return (
    <div className="auto-activation-page">
      <div className="page-container">
        <div className="page-header">
          <button
            className="back-button"
            onClick={() => navigate('/mode-selection')}
          >
            ←
          </button>
          <h1 className="page-title">Автоматическая активация</h1>
        </div>

        <div className="auto-packs-grid">
          {AUTO_PACKS.map((pack, index) => (
            <div
              key={pack.id}
              className="auto-pack-card"
              onClick={() => handlePackSelect(pack)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="auto-pack-content">
                <h3 className="auto-pack-value">{pack.value} UC</h3>
                <p className="auto-pack-price">{pack.price} ₽</p>
              </div>
              <div className="auto-pack-arrow">→</div>
            </div>
          ))}
        </div>
      </div>

      <BottomBar />
    </div>
  )
}

export default AutoActivation

