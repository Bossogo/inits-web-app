import Link from "next/link"
import React from "react"

type margin = 0|1|2|3|4|5
type ButtonProps = {
    children: React.ReactNode,
    mx: margin,
    className?: string,
    variant?: keyof typeof variants,
    href?: string
}
const variants = {
    primary: 'btn-lg bg-green text-white',
    'outline': 'border-green text-green',
    'outline-black': 'border-black text-black btn-outline',
}
const Button = ({ children, mx, className, variant, href }: ButtonProps) => {
  
  return (<>
        <Link className={`btn text-nowrap rounded-5 px-4 mx-${mx} ${variant?variants[variant]:''} ${className?className:''}`} href={href?href:''}>
            <span className="fs-6">{children}</span>
        </Link>
    </>
  )
}
export default Button