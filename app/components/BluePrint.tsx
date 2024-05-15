import { Container } from "react-bootstrap"
import Button from "./Button"
import Image from "next/image"

type Props = {}
const BluePrint = (props: Props) => {
  return (
    <>
        <Container fluid id="blueprint">
            <Container className="d-flex flex-column align-items-center pt-5 position-relative">
                <span className='text-white display-5 fw-bold text-start mb-3'>
                    Strategic Blueprints
                </span>
                <p className="text-white">Our vision to leverage the transformative power of digital technology and innovation to diversify and deepen Nigeria’s economy.</p>
                <Button mx={0} className="border-white mt-3">
                    Download Here
                    <Image 
                        src='/assets/icons/wht-dwnload.svg' 
                        alt='' width={15} height={15}
                        className='ms-2 animate-floatingY'
                    />
                </Button>
            </Container>
        </Container>
    </>
  )
}
export default BluePrint