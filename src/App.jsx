import React, { useState } from 'react'


function App() {
  const [puntos, setPuntos] = useState(0)
  const [izquierda, setIzquierda] = useState(0)
  const [derecha, setDerecha] = useState(1)
  const [letraIzq, setLetraIzq] = useState("Kb")
  const [letraDer, setLetraDer] = useState("Kb")
  const medidas = ["Kb", "Mb", "Gb" ,"Tb"]
  const valores = [1000 , 1000000, 1000000000, 1000000000000]
  const [randomIzq, setRandomIzq] = useState(0)
  const [randomDer, setRandomDer] = useState(0)
  const [multiIzq, setMultiIzq] = useState(1)
  const [multiDer, setMultiDer] = useState(1)


  const checar = (eleccion) =>{
    const mayor = izquierda * multiIzq > derecha * multiDer ? 1 : 2;
    mayor == eleccion ? setPuntos(puntos + 1) : setPuntos(puntos - 5)

    //generar nuevos numeros
    setIzquierda(Math.random() * 90)
    setDerecha(Math.random() * 90)
    setRandomIzq( Math.floor( Math.random() * 4))
    setRandomDer( Math.floor( Math.random() * 4))
    setLetraIzq(medidas[randomIzq])
    setLetraDer(medidas[randomDer])
    setMultiIzq(valores[randomIzq])
    setMultiDer(valores[randomDer])
  }

  return (
    <div className="container">
      <h3>Puntos: {puntos}</h3>
      <h1>¿Cuál es mayor?</h1>
      <div className="botones">
        <button onClick = {() => checar(1)} >{izquierda.toFixed(1)} {letraIzq} </button>
        <button onClick = {() => checar(2)} >{derecha.toFixed(1)} {letraDer} </button>
      </div>
    </div>
  )
}

export default App
