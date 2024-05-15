import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "./Button"
import Image from "next/image"

type Props = {}
const Welcome = (props: Props) => {
  return (
    <>
        <div id="welcome-section" className="container-fluid">
            <Container className='cover mt-5'>
                <Row>
                    <Col>
                        <Image src='/assets/images/thm-prof.jpg' alt='' width={386} height={431}/>
                    </Col>
                    <Col>
                        <span className='fs-1 fw-bold'>
                            Welcome  
                        </span>
                        <p> I am truly honoured to serve our great nation in this capacity as Minister of Communications, Innovation & Digital Economy as we work towards actualising the Renewed Hope Agenda of President Bola Ahmed Tinubu (GCFR).</p>
                        <p>We stand on the cusp of a new era, characterised by rapid technological advancements, and i believe it is our collective responsibility to harness the transformative power of innovation and technology, coupled with the ingenuity of the Nigerian people - young and old - to accelerate our development and position ourselves at the forefront of the global digital discourse.</p>
                        <p>To achieve this, with the input of critical stakeholders, we have co-created a Strategic Blueprint which will serve as a framework to guide our activities and ensure that we deliver on set targets for the prosperity of all Nigerians.</p>
                        <Button className='mt-3' mx={0}>
                            Learn More
                            <Image 
                                src='/assets/icons/right-arrow.svg' 
                                alt='' width={15} height={15}
                                className='ms-2 animate-floatingX'
                            />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}
export default Welcome