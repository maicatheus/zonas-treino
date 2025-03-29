import React, { useEffect, useState } from 'react'

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

  useEffect(() =>{
    console.log(zones);
    
  },[zones])
  return (
    <div className="zone-box">
      <h2>Como funciona?</h2>
      <p>Com base na fórmula <strong>FCmáx = 220 - idade</strong>, estimamos sua frequência cardíaca máxima. Depois, calculamos 5 zonas de treino com diferentes objetivos.</p>

      <label htmlFor="idade">Digite sua idade:</label>
      <input
        id="idade"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Ex: 30"
      />
      <button onClick={handleCalc}>Calcular Zonas</button>

    </div>
  )
}

export default ZoneCalculator