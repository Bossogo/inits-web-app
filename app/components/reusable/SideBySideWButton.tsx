import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "../Button"
import Image from "next/image"
import React, { HTMLAttributes } from "react"

type SideBySideWButtonProps = {
    title: string,
    text: string[],
    btn: {
        text: string,
        iconSrc: string,
        iconAxis?: string,
    }
    img: {
        imgSrc: string,
        width: number,
        height: number,
    }
    className?: string,
    imageOnLeft?: boolean
}

type TextColProps = {
    title: string;
    text: string[];
    btn: {
      text: string;
      iconSrc: string;
      iconAxis?: string;
    };
  };

function TextCol(
    {title, 
    text, 
    btn}: TextColProps
    ) {
    return <>
        <Col>
            <h2 className='fs-1 fw-normal mb-md-3'>
                {title}
            </h2>
            <p>
                {text.map((t, i) => {
                    return <React.Fragment key={i}>
                        {t} <br /> <br />
                    </React.Fragment>
                })}
            </p>
            {btn.text &&
                <Button mx={0} className="border-white mt-3">
                    {btn.text}
                    {btn.iconSrc && <Image
                        src={btn.iconSrc}
                        alt='' width={15} height={15}
                        className={`ms-2 ${btn.iconAxis ? ('animate-floating' + btn.iconAxis.toUpperCase()) : ''}`} />}
                </Button>}
        </Col>
    </>
}

function ImageCol(img: { imgSrc: string; width: number; height: number }) {
    return <>
        <Col>
            <Image src={img.imgSrc} alt='' width={img.width} height={img.height} />
        </Col>
    </>
}


const SideBySideWButton = ({
    title, 
    text, 
    btn,
    img,
    className,
    imageOnLeft = false,
}: SideBySideWButtonProps, 
) => {
  return (
    <>
        <Container fluid className="dual-content">
            <Container className={`py-5 ${className}`}>
                <Row>
                    <TextCol title={title} text={text} btn={btn}/>
                    <ImageCol {...img}/>
                </Row>
            </Container>
        </Container>
    </>
  )
}
export default SideBySideWButton




