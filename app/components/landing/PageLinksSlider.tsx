'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Col from 'react-bootstrap/Col';
import Link from "next/link";


var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:0,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
            }
        },
    ],
  };

type Props = {}
const NewsSlider = (props: Props) => {
  return (
    <>
        <div className="slider-wrapper container position-relative">
            <Slider {...settings}>
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
            </Slider>
        </div>
    </>
  )
}
export default NewsSlider