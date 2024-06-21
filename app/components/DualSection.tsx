import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "./Button"
import Image from "next/image"
import React, { FC } from "react"

const IconVariants: Direction = {
    right: {
        src: '/assets/icons/right-arrow.svg',
        axis: 'X'
    },
    down: {
        src: '/assets/icons/down-arrow.svg',
        axis: 'Y'
    },
    left: {
        src: '/assets/icons/left-arrow.svg',
        axis: 'X'
    },
    up: {
        src: '/assets/icons/up-arrow.svg',
        axis: 'Y'
    },
    download: {
        src: '/assets/icons/download.svg',
        axis: 'Y'
    }
}

const CustomButton: FC<btnType> = ({text, className, iconVariant}) => {
    return text?
    <Button mx={0} variant='primary' className={`mt-3 ${className ? className : ''}`}>
        {text}
        {iconVariant && <Image src={IconVariants[iconVariant]?.src} alt='' width={15} height={15} className={`btn-icon ms-2 ${IconVariants[iconVariant]?.axis ? 'animate-floating' + IconVariants[iconVariant]?.axis.toUpperCase() : ''}`} />}
    </Button>
    :null
}


const TextCol: FC<TextColProps> = ({ title, paragraph, btn, className, children }) => {

    return <>
        <Col className={className}>
            <h2 className={`${title.className ? title.className : 'title'} mb-md-3`}>
                {title.text}
            </h2>
            <p className={`${paragraph.className ? paragraph.className : 'text'}`}>
                {paragraph.text.map((t, i) => {
                    return <React.Fragment key={i}>
                        {t} <br /> <br />
                    </React.Fragment>
                })}
            </p>
            <CustomButton {...btn} />
            {children}
        </Col>
    </>
}

const ImageCol: FC<imgType & {className?: string}> = ({ imgSrc, width, height, className }) => {
    return <>
        <Col className={className}>
            <Image src={imgSrc} alt='' width={width} height={height} className="img-cover" />
        </Col>
    </>
}


const DualSection: FC<DualSectionProps> = ({
    title,
    paragraph,
    btn = {},
    img,
    className,
    imageOnLeft = false,
    textColClassName,
    imageColClassName,
    children
}) => {

    return (
        <>
            <Container className={`py-5${className ? " " + className : ""}`}>
                <Row>
                    {img ? (imageOnLeft ?
                        <>
                            <ImageCol {...img} />
                            <TextCol title={title} paragraph={paragraph} btn={btn} className={textColClassName}>
                                {children}
                            </TextCol>
                        </>
                        :
                        <>
                            <TextCol title={title} paragraph={paragraph} btn={btn} className={textColClassName}>
                                {children}
                            </TextCol>
                            <ImageCol {...img} className={imageColClassName} />
                        </>)
                        :
                        <TextCol title={title} paragraph={paragraph} btn={btn} className={textColClassName}>
                            {children}
                        </TextCol>
                    }
                </Row>
            </Container>
        </>
    )
}
export default DualSection




