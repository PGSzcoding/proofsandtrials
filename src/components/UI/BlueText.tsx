import type { ReactNode } from "react";

type Props = {
    className?:string;
    size?:string;
    children?: ReactNode;
    textSeparation?: string
};

export default function BlueText({className = '',size="sm",textSeparation="0.25em",children}:Props){
    return (
        <span className={`text-${size} font-semibold uppercase tracking-[${textSeparation}] text-[#0281FC] ${className}`}>{children} </span>
    )
}