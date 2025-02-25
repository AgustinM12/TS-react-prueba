type CardProps = {
    text1: string
    text2: string
    children?: React.ReactNode
    // children?: React.JSX.Element
}

export const Card = ({ text1, text2, children }: CardProps) => {
    return (
        <div className="rounded bg-blue-400 flex flex-col justify-center p-5 border-2 border-blue-600">

            <div>
                <div className="bg-neutral-200 border-2 border-blue-600 ">{text1}</div>
                <div className="bg-neutral-200 border-2 border-blue-600 ">{text2}</div>
            </div>

            <div>{children}</div>
        </div>
    )
}
