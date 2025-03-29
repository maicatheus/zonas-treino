import React, { useState } from 'react'

function ZoneCalculator() {
  const [age, setAge] = useState('')
  const [zones, setZones] = useState(null)

  const handleCalc = () => {
    const maxHR = 220 - parseInt(age)
    const calc = (min, max) => `${Math.round(maxHR * min)} - ${Math.round(maxHR * max)} bpm`

    setZones({
      maxHR,
      z1: calc(0.5, 0.6),
      z2: calc(0.6, 0.7),
      z3: calc(0.7, 0.8),
      z4: calc(0.8, 0.9),
      z5: calc(0.9, 1.0)
    })
  }

  return (
    <div className="zone-box">
      <h2>Como funciona?</h2>
      <p>Com base na fórmula <strong>FCmáx = 220 - idade</strong>, estimamos sua frequência cardíaca máxima (FCmáx). Depois, calculamos 5 zonas de treino, cada uma com uma função específica no seu condicionamento físico.</p>

      <label htmlFor="idade">Digite sua idade:</label>
      <input
        id="idade"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Ex: 30"
      />
      <button onClick={handleCalc}>Calcular Zonas</button>

      {zones && (
        <div className="result">
          <h3>Resultado</h3>
          <p><strong>Frequência Cardíaca Máxima estimada:</strong> {zones.maxHR} bpm</p>

          <ul>
            <li><strong>Zona 1 (50–60%):</strong> {zones.z1} — Ideal para <em>recuperação ativa</em> e iniciantes. Ajuda a melhorar a circulação e promover relaxamento.</li>
            <li><strong>Zona 2 (60–70%):</strong> {zones.z2} — <em>Queima de gordura</em>, base aeróbica. Essencial para treinos longos e sustentáveis.</li>
            <li><strong>Zona 3 (70–80%):</strong> {zones.z3} — <em>Capacidade cardiovascular</em>. Melhora o transporte de oxigênio e resistência geral.</li>
            <li><strong>Zona 4 (80–90%):</strong> {zones.z4} — Trabalha o <em>limiar anaeróbico</em>. Aumenta velocidade e tolerância ao esforço.</li>
            <li><strong>Zona 5 (90–100%):</strong> {zones.z5} — <em>Esforço máximo</em>, indicado para sprints e treinos intervalados curtos.</li>
          </ul>

          <p className="explicacao">
            <strong>Por que treinar por zonas?</strong><br/>
            Treinar baseado em zonas de frequência cardíaca permite controlar a intensidade do exercício, evitando exageros e maximizando os resultados. Seja para <strong>perder peso, melhorar a resistência ou competir melhor</strong>, entender essas zonas é fundamental para evoluir com segurança.
          </p>
        </div>
      )}
    </div>
  )
}

export default ZoneCalculator