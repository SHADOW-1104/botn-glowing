import { useState } from "react"

export const App = () => {
  const val = 201;

  const [cont, setCont] = useState(null)
  
  const handleSuma = () => {
    setCont(cont + 1)
  }
  
  return (
    <>
    <div className="container">
      <h2>Contador :</h2>
      {cont && <h2>{cont}</h2>}
    </div>
      <button className="btn" type='button' onClick={handleSuma}>Click me!</button>
      
    </>
  )
}