import React, { FC, ReactNode } from "react";
import Container from "react-bootstrap/Container";

interface ContainerLayoutProps {
    children: ReactNode,
    className?: string
    id?: string
}

const ContainerLayout:FC<ContainerLayoutProps> = ({ children , id, className}) => {
    return (
        <Container fluid id={`${id?id:''}`} className={`p-0 ${className?className:''}`}>
            {children}
        </Container>
    )
}

export default ContainerLayout