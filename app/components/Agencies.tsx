import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"

type Props = {}
const Agencies = (props: Props) => {
  return (<>
        <Container fluid id="agencies-section">
            <Container className="d-flex flex-column align-items-center pt-5 position-relative pb-md-5">
                <span className='display-5 fw-bold text-start mb-5'>
                    Our Agencies
                </span>
                <Container fluid className="pt-5">
                    <div className="cards container w-100 ">
                        <Row>
                            <Col>
                                <div className="box">
                                    <div>
                                        <Link href="#">
                                        <Image 
                                            width={200} height={89}
                                            src="/assets/icons/agencies/nitda.svg" 
                                             alt=""
                                        />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <div>
                                        <Link href="#">
                                            <Image 
                                            width={200} height={89}
                                            src="/assets/icons/agencies/ndpc.svg" 
                                             alt=""
                                        />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <div>
                                        <Link href="#">
                                            <Image 
                                            width={200} height={89}
                                            src="/assets/icons/agencies/galaxy.svg" 
                                             alt=""
                                        />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <div>
                                        <Link href="#">
                                            <Image 
                                            width={200} height={89}
                                            src="/assets/icons/agencies/comsat.svg" 
                                             alt=""
                                        />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="cards container w-100 mt-5">
                        <Row>
                            <Col>
                                <div className="box">
                                    <div>
                                        <Link href="#">
                                        <Image 
                                            width={200} height={89}
                                            src="/assets/icons/agencies/ncc.svg" 
                                             alt=""
                                        />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <div>
                                        <Link href="#">
                                            <Image 
                                            width={200} height={89}
                                            src="/assets/icons/agencies/nipost.svg" 
                                             alt=""
                                        />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <div>
                                        <Link href="#">
                                            <Image 
                                            width={200} height={89}
                                            src="/assets/icons/agencies/nimc.svg" 
                                             alt=""
                                        />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </Container>
    </>
  )
}
export default Agencies