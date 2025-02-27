type User = {
    name: string;
    email: string;
    status: boolean;
    password: string;
}

type Status = "active" | "inactive" | "pending"

// ! Ejemplo de utility type 'OMIT', permite crear un nuevo tipo omitiendo propiedades
type UserWithoutPass = Omit<User, "password">

// ! Ejemplo de utility type 'PARTIAL', permite crear un nuevo tipo volviendo propiedades opcionales
type UpdateUser = Partial<User>

// ! Ejemplo de utility type 'PICK', permite crear un nuevo tipo escogiendo las propiedades especificas 
type PublicDataUser = Pick<User, "name" | "email">


// ! Ejemplo de concatenar utility types 
type UserOptionalWithoutPass = Partial<Omit<User, "password">>

// ! Ejemplo de utility type 'Exclude', similar a "OMIT"
type AllowStatus = Exclude<Status, "pending">