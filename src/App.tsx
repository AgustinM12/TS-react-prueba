import { useState } from "react";
import { Button } from "./components/Button"
import { Count } from "./components/Count";

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
      <div className="bg-slate-950 w-screen h-screen flex items-center justify-center gap-10">

        <div className="flex flex-col justify-center items-center gap-3 bg-blue-400">

          <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} className="w-fit" />

          <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} className="w-fit" />

        </div>

        <Button text="Sumar" color="red" onClick={() => sumar(num1, num2)} />

        <Count />

      </div>
    </>
  )
}

export default App
