export const useFetch = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data: unknown = await response.json()

    return data

}

type apiResponse = {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

// ! EJEMPLOS DE USO DEL AS PARA DARLE UN TIPO ESTIMANDO A DATOS UNKNOWN O ANY

const data = await useFetch() as apiResponse

// ! TRATAR UN ARRAY COMO SI FUERA UNA TUPLA DE SOLO LECTURA
const array = ["red", "blue", "black"] as const

array[0]

//! EJEMPLO DE USO DE GENERICS, INDICA QUE NO SE SABE CUAL SERA UN TIPO DE DATO Y SE LO DEFINIRA AL MOMENTO DE TIPARLO
type ApiReturn<T> = {
    status: 200 | 400 | 500,
    data: T
}

const response: ApiReturn<{ name: string, age: number }> = {
    status: 200,
    data: {
        age: 20,
        name: "pepe"
    }
}