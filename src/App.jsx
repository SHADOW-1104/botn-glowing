import { useState } from "react"

export const App = () => {

  const [cont, setCont] = useState(null)

  const handleSuma = () => {
    setCont(cont + 1)
  }

  return (
    <>
      <h1>Contador</h1>
      {cont && <h2>{cont}</h2>}
      <button className="btn" type='button' onClick={handleSuma}>Click me!</button>
    </>
  )
}