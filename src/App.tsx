import { useState } from "react";
import { Button } from "./components/Button"
import { Card } from "./components/Card"

function App() {

  function sumar(x: number, y: number): void {
    const resultado: number = x + y

    console.log(resultado);
  }

  // ! TIPADO DE USE-STATE
  const [num1, setNum1] = useState<number>(0)
  const [num2, setNum2] = useState<number>(0)

  return (
    <>
      <div className="bg-slate-950 w-screen h-screen flex items-center justify-center">

        <input type="number" value={num1} onChange={(e)=>setNum1(Number(e.target.value))}/>
        <input type="number" value={num2} onChange={(e)=>setNum2(Number(e.target.value))}/>

        <Button text="Sumar" color="red" onClick={()=>sumar(num1, num2)} />

        <Card text1="hola" text2="chau">
          <p>LALALALA</p>
        </Card>

      </div>
    </>
  )
}

export default App
