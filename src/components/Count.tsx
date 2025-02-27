import { useState, useRef } from "react"


export const Count = () => {

    const [count, setCount] = useState<number>(0)

    const myButton = useRef<HTMLButtonElement>(null)

    // ! useref permite acceder a las propiedades de un boton
    myButton.current?.hidden 

    return (
        <>
            <p>{count}</p>

            <button ref={myButton} onClick={() => setCount(count + 1)}>Count +</button>
        </>
    )
}
