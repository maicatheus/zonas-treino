import React from 'react'
import ZoneCalculator from './components/ZoneCalculator'

function App() {
  return (
    <div className="container">
      <h1 className="main-title">Calculadora de Zonas de Treinamento</h1>
      <p className="sub-title">Descubra suas zonas de treino com base na sua idade e aprenda a importância de cada uma para melhorar sua saúde e performance.</p>
      <ZoneCalculator />
      <footer className="footer">
        <p>Projeto da Atividade Extensionista II – UNINTER</p>
        <p>Aluno: Matheus Maica | RU: 3748966</p>
        <p>Curso: CST em Análise e Desenvolvimento de Sistemas</p>
      </footer>
    </div>
  )
}

export default App