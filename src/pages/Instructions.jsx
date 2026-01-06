import React from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './Instructions.css'

const Instructions = () => {
  const navigate = useNavigate()

  return (
    <div className="instructions-page">
      <div className="page-container">
        <div className="page-header">
          <button
            className="back-button"
            onClick={() => navigate('/my-codes')}
          >
            ←
          </button>
          <h1 className="page-title">Инструкция</h1>
        </div>

        <div className="instructions-content-full">
          <div className="instruction-section">
            <h2 className="instruction-title">
              Как активировать коды UC в PUBG Mobile
            </h2>

            <div className="instruction-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Откройте игру PUBG Mobile</h3>
                <p className="step-description">
                  Запустите приложение PUBG Mobile на вашем устройстве и войдите
                  в свой аккаунт.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Перейдите в раздел "Магазин"</h3>
                <p className="step-description">
                  В главном меню игры найдите и нажмите на кнопку "Магазин"
                  (Shop).
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Выберите "Пополнить UC"</h3>
                <p className="step-description">
                  В магазине найдите опцию "Пополнить UC" или "Redeem Code"
                  (Активировать код).
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Введите код активации</h3>
                <p className="step-description">
                  Скопируйте код из раздела "Мои коды" и вставьте его в поле для
                  ввода кода.
                </p>
              </div>
            </div>

            <div className="instruction-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3 className="step-title">Подтвердите активацию</h3>
                <p className="step-description">
                  Нажмите кнопку "Активировать" или "Подтвердить". UC будут
                  зачислены на ваш аккаунт.
                </p>
              </div>
            </div>

            <div className="instruction-note">
              <p className="note-text">
                <strong>Важно:</strong> Каждый код можно использовать только один
                раз. После активации код становится недействительным.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  )
}

export default Instructions

