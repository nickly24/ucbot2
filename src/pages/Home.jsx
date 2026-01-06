import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomBar from '../components/BottomBar'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Home component rendered')
  }, [])

  return (
    <div className="home-page">
      <div className="page-container">
        <div className="main-card">
          <div
            className="main-card-bg"
            style={{
              backgroundImage: `url(/img/фон мисс бот копия.jpg)`,
            }}
          ></div>
          <div className="main-card-content">
            <div className="main-card-icon">🎮</div>
            <h2 className="main-card-title">PUBG Mobile</h2>
            <p className="main-card-subtitle">Пополнение UC</p>
            <button
              className="btn btn-primary main-card-button"
              onClick={() => navigate('/code-purchase')}
            >
              Пополнить
            </button>
          </div>
        </div>

        <div className="stars-card disabled">
          <div className="stars-card-content">
            <div className="stars-card-icon">⭐</div>
            <h3 className="stars-card-title">TG STARS</h3>
            <p className="stars-card-subtitle">Недоступно</p>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  )
}

export default Home

