import { Container, Row } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Link from 'next/link';


type Props = {}
const PageLinks = (props: Props) => {
  return (<>
    <Container fluid id="page-links" className="pt-5 pb-5">
        <Container className="rounded-4">
            <Container className="d-flex flex-column align-items-center pt-5 pb-5">
                <Row>
                    <Col>
                        <h4 className=''>
                            The Ministry
                        </h4>
                    
                        <ul className='list-unstyled'>
                            <li>
                                <Link href="#">The Mandate</Link>
                            </li>
                            <li>
                                <Link href="#">The Structure</Link>
                            </li>
                            <li>
                                <Link href="#">Units & Deparment</Link>
                            </li>
                            <li>
                                <Link href="#">Leaders and Directors</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className=''>
                        Initiatives
                        </h4>
                    
                        <ul className='list-unstyled'>
                            <li>
                                <Link href="#">3MTT Programme</Link>
                            </li>
                            <li>
                                <Link href="#">Digital Nigeria</Link>
                            </li>
                            <li>
                                <Link href="#">E-Governance</Link>
                            </li>
                            <li>
                                <Link href="#">Nigeria Artificial Intelligence Research Scheme</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className=''>
                            Media
                        </h4>
                    
                        <ul className='list-unstyled'>
                            <li>
                                <Link href="#">Daily News</Link>
                            </li>
                            <li>
                                <Link href="#">Events</Link>
                            </li>
                            <li>
                                <Link href="#">Gallery</Link>
                            </li>
                            <li>
                                <Link href="#">Articles</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className=''>
                            Resources
                        </h4>
                    
                        <ul className='list-unstyled'>
                            <li>
                                <Link href="#">Reports</Link>
                            </li>
                            <li>
                                <Link href="#">Policies</Link>
                            </li>
                            <li>
                                <Link href="#">Links</Link>
                            </li>
                            <li>
                                <Link href="#">Forms</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Container>
  </>
  )
}
export default PageLinks