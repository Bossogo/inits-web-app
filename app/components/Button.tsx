import Link from "next/link"
import React from "react"

type margin = 0|1|2|3|4|5
type Props = {
    children: React.ReactNode,
    mx: margin,
    className?: string,
}

const Button = ({children, mx, className }: Props) => {
  return (<>
        <Link className={`btn text-nowrap btn-lg bg-green rounded-5 text-white mx-${mx} ${className}`} href="">
            <span className="fs-6">{children}</span>
        </Link>
    </>
  )
}
export default Button