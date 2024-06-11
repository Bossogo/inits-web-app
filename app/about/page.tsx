import DualSection from '../components/DualSection'
import "./index.scss"
import ColouredContainer from '../components/layouts/ColouredContainer'

type Props = {}

const About = (props: Props) => {
  return (<>
    <ColouredContainer>
        <DualSection 
            title={{
                text: "Pioneering Nigeria's Digital Future", 
                className: 'title__big title__big-primary'
            }}
            paragraph={{
                    text:
                        [
                            'The Federal Ministry of Communications, Innovation & Digital Economy (formerly known as the Federal Ministry of Communications Technology) was created in 2011 to drive economic growth through digital technology and innovation.',
                            'Our mandate is to accelerate the diversification of the Nigerian economy by enhancing productivity in critical sectors.'
                        ],
                    className: 'text__big'
            }}
            btn={{
                text: 'See Our Structure',
                iconVariant: 'right',
            }}
            className="col-8 ms-5"
        />
    </ColouredContainer>

    <DualSection 
        title={{
            text: "Our Journey",
        }}
        paragraph={{
            text:[
                "Welcome to the Ministry of Communications, Innovation, and Digital Economy – Your Gateway to Nigeria’s Digital Transformation.",
                "In the ever-evolving landscape of Nigeria’s digital transformation, there exists a beacon of innovation and progress—the Ministry of Communications, Innovation, and Digital Economy.",
                "Established in 2011 under the banner of the Ministry of Communication Technology, our inception marked a pivotal moment in Nigeria’s quest for a knowledge-based economy and an inclusive information society.",
                "Our journey began with a deep-seated belief in the power of connectivity and the boundless potential of digital innovation. We understand that in the digital age, access to information and technology is not just a luxury; it’s a fundamental right. And so, with unwavering determination, we set out to bridge the digital divide that had long separated our nation’s urban centers from its rural heartlands.",
            ]
        }}
        img={{
            imgSrc:'/assets/images/img-2.jpg', 
            width: 386, 
            height: 431
        }}
        imageOnLeft
        className="px-5"
    />
  </>
    
  )
}
export default About