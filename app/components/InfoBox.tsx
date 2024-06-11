import React, { FC } from 'react';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import { CardImg } from 'react-bootstrap';
import Button from './Button';
import Image from 'next/image';

interface InfoBoxProps {
    title?: string;
    text?: string;
    iconVariant?: string;
}
interface InfoBoxIconVariants {
    [key: string]: {
        src: string;
        axis: string;
    }
}
const IconVariants: InfoBoxIconVariants = {
    right: {
        src: '/assets/icons/right-arrow-grn.svg',
        axis: 'X'
    },
    download: {
        src: '/assets/icons/grn-dwnload.svg',
        axis: 'Y'
    }
}

const InfoBox: FC<InfoBoxProps> = ({title, text, iconVariant = 'right'}) => {
    return (
        <>
            <Card className="p-4 text-center">
                <CardImg className='mt-5' variant="top" src="/assets/icons/init-grn.svg" alt='lightbulb' width={50} height={50} />
                <CardBody className='pb-5'>
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <CardText>
                        {text}
                        <br /><br />
                        <Button mx={0} className='border-green bg-white text-green'>
                            Read More
                            <Image 
                                src={IconVariants[iconVariant]?.src} 
                                alt='' width={15} height={15} 
                                className={`ms-2 ${IconVariants[iconVariant]?.axis ? 'animate-floating' + IconVariants[iconVariant]?.axis.toUpperCase() : ''}`} 
                            />
                            
                        </Button>

                    </CardText>
                </CardBody>
            </Card>
        </>
    );
}

export default InfoBox;