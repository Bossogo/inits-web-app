import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Button from './Button';

type Props = {}
const Hero = (props: Props) => {
  return (
    <>
        <Container fluid className='hero-wrapper'>
            <Container className='hero'>
                <Row>
                    <Col>
                        <div className='flex-column d-flex'>
                            <span className='text-white display-5 fw-bold text-start mb-4'>
                                Driving Economic Growth Through Digital Technology & Innovation
                            </span>
                            <Button className='col-4' mx={0}>
                                <span className='position-relative'>
                                    Learn More
                                    <Image 
                                        src='/assets/icons/down-arrow.svg' 
                                        alt='' width={15} height={15}
                                        className='ms-2 animate-floatingY'
                                    />
                                </span>
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <Image src='/assets/images/hero-icon.png' alt='' width={424} height={366}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
  )
}
export default Hero