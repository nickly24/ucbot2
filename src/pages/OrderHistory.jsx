import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './OrderHistory.css'

const OrderHistory = () => {
  const navigate = useNavigate()
  const [showHelp, setShowHelp] = useState(false)

  const orders = [
    {
      id: 1,
      date: '01.12.2025',
      type: 'Коды',
      amount: 150,
      status: 'Оплачено',
      codes: ['ABC123XYZ', 'DEF456UVW'],
    },
    {
      id: 2,
      date: '30.11.2025',
      type: 'Автоактивация',
      amount: 500,
      status: 'Оплачено',
      playerId: '5555555555',
    },
    {
      id: 3,
      date: '29.11.2025',
      type: 'Коды',
      amount: 250,
      status: 'Оплачено',
      codes: ['GHI789RST'],
    },
  ]

  return (
    <div className="order-history-page">
      <div className="page-container">
        <div className="page-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ←
          </button>
          <h1 className="page-title">История заказов</h1>
          <button
            className="help-button"
            onClick={() => setShowHelp(!showHelp)}
          >
            <span className="help-icon">?</span>
          </button>
        </div>

        {showHelp && (
          <div className="help-popup">
            <h3>Информация о заказах</h3>
            <p>
              Здесь отображается история всех ваших покупок. Вы можете просмотреть
              детали каждого заказа, включая коды и статус оплаты.
            </p>
            <p>
              Статус "Оплачено" означает, что заказ успешно обработан и коды
              доступны в разделе "Мои коды".
            </p>
          </div>
        )}

        {orders.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <p className="empty-text">У вас пока нет заказов</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <span className="order-date">{order.date}</span>
                    <span className="order-type">{order.type}</span>
                  </div>
                  <span className="order-status оплачено">
                    {order.status}
                  </span>
                </div>
                <div className="order-details">
                  <p className="order-amount">Сумма: {order.amount} ₽</p>
                  {order.codes && (
                    <p className="order-codes">
                      Кодов: {order.codes.length}
                    </p>
                  )}
                  {order.playerId && (
                    <p className="order-player-id">
                      Player ID: {order.playerId}
                    </p>
                  )}
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

export default OrderHistory

