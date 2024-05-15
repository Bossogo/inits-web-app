import { Container } from "react-bootstrap"
import Button from "./Button"
import Image from "next/image"
import NewsSlider from "./NewsSlider"



type Props = {}
const News = (props: Props) => {
    
  return (
    <>
        <Container fluid id="news-section" className="mb-5">
            <Container className="d-flex flex-column align-items-center pt-5 position-relative">
                <span className='display-5 fw-bold text-start mb-3'>
                    News
                </span>
                <p className="">
                    Stay informed with the most recent updates from the Ministry.</p>
                
                    <NewsSlider/>

                <Button mx={0} className="border-white mt-3">
                    Read More
                    <Image
                        src='/assets/icons/right-arrow.svg' 
                        alt='' width={15} height={15}
                        className='ms-2 animate-floatingX'
                    />
                </Button>
            </Container>
        </Container>
    </>
  )
}
export default News