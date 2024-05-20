'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardImg from "react-bootstrap/CardImg";
import CardText from "react-bootstrap/CardText";
import CardImgOverlay from "react-bootstrap/CardImgOverlay";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ],
  };

type Props = {}
const NewsSlider = (props: Props) => {
  return (
    <>
        <div className="slider-wrapper container position-relative">
            <Slider {...settings}>
                <Card className="slider-item bg-black text-white">
                    <CardImg variant="top" className="card-img" src="/assets/images/gallery/NITDA _farm_visit.jpeg" />
                    <CardImgOverlay className="align-content-end">
                        <CardBody>
                            <CardText>
                            #WeekInReview: Full Week Recap of Activities of the Honourable Minister, Dr. ‘Bosun Tijani
                            </CardText>
                            <CardText>
                            May 6, 2024
                            </CardText>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
                <Card className="slider-item bg-black text-white">
                    <CardImg variant="top" className="card-img" src="/assets/images/3mtt.jpg" />
                    <CardImgOverlay className="align-content-end">
                        <CardBody>
                            <CardText>
                            #WeekInReview: Full Week Recap of Activities of the Honourable Minister, Dr. ‘Bosun Tijani
                            </CardText>
                            <CardText>
                            May 6, 2024
                            </CardText>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
                <Card className="slider-item bg-black text-white">
                    <CardImg variant="top" className="card-img" src="/assets/images/img-1.png" />
                    <CardImgOverlay className="align-content-end">
                        <CardBody>
                            <CardText>
                            #WeekInReview: Full Week Recap of Activities of the Honourable Minister, Dr. ‘Bosun Tijani
                            </CardText>
                            <CardText>
                            May 6, 2024
                            </CardText>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
                <Card className="slider-item bg-black text-white">
                    <CardImg variant="top" className="card-img" src="/assets/images/img-2.jpg" />
                    <CardImgOverlay className="align-content-end">
                        <CardBody>
                            <CardText>
                            #WeekInReview: Full Week Recap of Activities of the Honourable Minister, Dr. ‘Bosun Tijani
                            </CardText>
                            <CardText>
                            May 6, 2024
                            </CardText>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
                <Card className="slider-item bg-black text-white">
                    <CardImg variant="top" className="card-img" src="/assets/images/news-3.webp" />
                    <CardImgOverlay className="align-content-end">
                        <CardBody>
                            <CardText>
                            #WeekInReview: Full Week Recap of Activities of the Honourable Minister, Dr. ‘Bosun Tijani
                            </CardText>
                            <CardText>
                            May 6, 2024
                            </CardText>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
            </Slider>
        </div>
    </>
  )
}
export default NewsSlider