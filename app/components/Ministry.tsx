/* import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "./Button"
import Image from "next/image" */
import SideBySideWButton from '../components/reusable/SideBySideWButton';

type Props = {}
const Ministry = (props: Props) => {
  return (
    <>
        <div id="ministry-section" className="container-fluid">
            <SideBySideWButton 
                title='About the Ministry'
                text={
                    [
                        'The Federal Ministry of Communications, Innovation, and Digital Economy was created in 2011. Formerly known as The Federal Ministry of Communications Technology, it was created to foster a knowledge-based economy and information society in Nigeria.'
                        ,'The Ministry was created to facilitate ICT as a key tool in the transformation agenda for Nigeria in the areas of job creation, economic growth, and transparency of governance.'
                    ]}
                btn={{
                    text: 'Read More',
                    iconSrc: '/assets/icons/right-arrow.svg',
                    iconAxis: 'X',
                }}
                img={{
                    imgSrc:'/assets/icons/emblem-opq.svg', 
                    width: 386, 
                    height: 431
                }}
                className=""
            />

            {/* <Container className='pb-5 pt-5'>
                <Row>
                    <Col>
                        <h2 className='fs-1 fw-medium mb-3'>
                            About the Ministry  
                        </h2>
                        <p>
                            The Federal Ministry of Communications, Innovation, and Digital Economy was created in 2011. Formerly known as The Federal Ministry of Communications Technology, it was created to foster a knowledge-based economy and information society in Nigeria.
                            <br />
                            <br />
                            The Ministry was created to facilitate ICT as a key tool in the transformation agenda for Nigeria in the areas of job creation, economic growth, and transparency of governance.
                        </p>
                        <Button mx={0} className="border-white mt-3">
                            Read More
                            <Image
                                src='/assets/icons/right-arrow.svg' 
                                alt='' width={15} height={15}
                                className='ms-2 animate-floatingX'
                            />
                        </Button>
                    </Col>
                    <Col>
                        <Image src='/assets/icons/emblem-opq.svg' alt='' width={386} height={431}/>
                    </Col>
                </Row>
            </Container> */}
        </div>
    </>
  )
}
export default Ministry