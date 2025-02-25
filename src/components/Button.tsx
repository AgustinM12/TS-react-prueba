
// ! el ? significa que es opcional
type ButtomProps = {
    text:string;
    color?: "red" | "blue"
    onClick:()=> void
}

export const Button = ({text, color, onClick}: ButtomProps) => {

    return (
        <button className={`p-2 ${color ? `bg-${color}-500` : "bg-gray-300"} text-white font-semibold rounded w-fit hover:scale-110 transition-all duration-300 cursor-pointer`} onClick={onClick}>{text}</button>
    )
}
