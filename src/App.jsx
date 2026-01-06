import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useTelegram } from './hooks/useTelegram'
import Home from './pages/Home'
import CodePurchase from './pages/CodePurchase'
import CodeCart from './pages/CodeCart'
import OrderHistory from './pages/OrderHistory'
import MyCodes from './pages/MyCodes'
import Instructions from './pages/Instructions'
import ModeSelection from './pages/ModeSelection'
import AutoActivation from './pages/AutoActivation'
import AutoCart from './pages/AutoCart'
import './App.css'

function App() {
  const { tg, initTelegram } = useTelegram()

  useEffect(() => {
    console.log('App component mounted')
    initTelegram()
  }, [initTelegram])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-purchase" element={<CodePurchase />} />
          <Route path="/code-cart" element={<CodeCart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/my-codes" element={<MyCodes />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/mode-selection" element={<ModeSelection />} />
          <Route path="/auto-activation" element={<AutoActivation />} />
          <Route path="/auto-cart" element={<AutoCart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App