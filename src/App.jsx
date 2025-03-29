import React from 'react'
import ZoneCalculator from './components/ZoneCalculator'

function App() {
  return (
    <div className="container">
      <h1 className="main-title">Calculadora de Zonas de Treinamento</h1>
      <p className="sub-title">Descubra suas zonas de treino com base na sua idade e aprenda a importância de cada uma para melhorar sua saúde e performance.</p>
      <ZoneCalculator />
    </div>
  )
}

export default App