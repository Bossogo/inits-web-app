import DualSection from './components/DualSection';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Button from './components/Button';
import NewsSlider from './components/landing/NewsSlider';
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardImg from "react-bootstrap/CardImg";
import CardText from "react-bootstrap/CardText";
import CardImgOverlay from "react-bootstrap/CardImgOverlay";

import Link from 'next/link';
import ContainerLayout from './components/layouts/ContainerLayout';

import PageLinksSlider from './components/landing/PageLinksSlider'
type Props = {}

const Landing = (props: Props) => {
  return (<>
    {/* Hero */}
    <ContainerLayout className='hero-wrapper animate-zoomInBg p-0'>
      <ContainerLayout className='bg-darken'>
          <DualSection 
            title={{
                text: "Driving Economic Growth Through Digital Technology & Innovation", 
                className: 'title__big title__big-white text-start'
            }}
            paragraph={{
                    text:[]
            }}
            btn={{
                text: 'Learn More',
                iconVariant: 'down',
                className: 'col-4 align-self-start'
            }}
            img={{
                imgSrc:'/assets/images/hero-icon.png', 
                width: 424, 
                height: 366
            }}
            imageColClassName='d-none d-lg-flex'
            textColClassName='justify-content-end justify-content-lg-center'
            className="hero"

          />
      </ContainerLayout>
    </ContainerLayout>

    {/* Welcome */}
    <ContainerLayout id="welcome-section">
        <DualSection 
            className=""
            title={{
                text: "Welcome", 
                className: ''
            }}
            paragraph={{
                    text:[
                      "I am truly honoured to serve our great nation in this capacity as Minister of Communications, Innovation & Digital Economy as we work towards actualising the Renewed Hope Agenda of President Bola Ahmed Tinubu (GCFR).",
                      "We stand on the cusp of a new era, characterised by rapid technological advancements, and i believe it is our collective responsibility to harness the transformative power of innovation and technology, coupled with the ingenuity of the Nigerian people - young and old - to accelerate our development and position ourselves at the forefront of the global digital discourse.",
                      "To achieve this, with the input of critical stakeholders, we have co-created a Strategic Blueprint which will serve as a framework to guide our activities and ensure that we deliver on set targets for the prosperity of all Nigerians."
                    ]
            }}
            btn={{
                text: 'Learn More',
                iconVariant: 'right',
                className: ''
            }}
            img={{
                imgSrc:'/assets/images/thm-prof.jpg', 
                width: 431, 
                height: 406,
            }} 
            textColClassName='col-12 col-lg-6 mt-3 mt-lg-0'
    
            imageOnLeft
          />
    </ContainerLayout>

    {/* BluePrint */}
    <ContainerLayout id="blueprint">
      <Container className="d-flex flex-column align-items-center pt-5 position-relative">
          <span className='text-white display-5 fw-bold text-start mb-3'>
              Strategic Blueprints
          </span>
          <p className="text-white">Our vision to leverage the transformative power of digital technology and innovation to diversify and deepen Nigeria’s economy.</p>
          <Button mx={0} variant='primary' className="border-white mt-3">
              Download Here
              <Image 
                  src='/assets/icons/wht-dwnload.svg' 
                  alt='' width={15} height={15}
                  className='ms-2 animate-floatingY'
              />
          </Button>
      </Container>
    </ContainerLayout>

    {/* Ministry Section */}
    <ContainerLayout id="ministry-section">
        <DualSection 
            title={{text: 'About the Ministry'}}
            paragraph={{
              text: [
                    'The Federal Ministry of Communications, Innovation, and Digital Economy was created in 2011. Formerly known as The Federal Ministry of Communications Technology, it was created to foster a knowledge-based economy and information society in Nigeria.'
                    ,'The Ministry was created to facilitate ICT as a key tool in the transformation agenda for Nigeria in the areas of job creation, economic growth, and transparency of governance.'
                ]}}
            btn={{
                text: 'Read More',
                iconVariant: 'right',
            }}
            img={{
                imgSrc:'/assets/icons/emblem-opq.svg', 
                width: 386, 
                height: 431
            }}
            textColClassName='col-12 col-lg-6'
            imageColClassName=''
        />
    </ContainerLayout>

    {/* News */}
    <ContainerLayout id="news-section" className="mb-5">
      <Container className="d-flex flex-column align-items-center pt-5 position-relative">
          <span className='display-5 fw-bold text-start mb-3'>
              News
          </span>
          <p className="">
            Stay informed with the most recent updates from the Ministry.
          </p>
          
          <NewsSlider/>

          <Button mx={0} variant='primary' className="border-white mt-3">
              Read More
              <Image
                  src='/assets/icons/right-arrow.svg' 
                  alt='' width={15} height={15}
                  className='ms-2 animate-floatingX'
              />
          </Button>
      </Container>
    </ContainerLayout>

    {/* Page Links */}
    <ContainerLayout id="page-links" className="pt-5 pb-5">
      <Container className="rounded-4">
          <Container className="d-flex flex-column align-items-center pt-5 pb-5">
              {/* <Row>
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
              </Row> */}<PageLinksSlider/>
          </Container>
      </Container>
    </ContainerLayout>

    {/* Agencies */}
    <ContainerLayout id="agencies-section">
      <Container className="d-flex flex-column align-items-center pt-5 position-relative pb-md-5">
          <span className='display-5 fw-bold text-start mb-5'>
              Our Agencies
          </span>
          <ContainerLayout className="pt-5">
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
          </ContainerLayout>
      </Container>
    </ContainerLayout>

    {/* Follow */}
    <ContainerLayout id="follow-section" className='pb-5'>
      <Container className='pt-5 '>
          <div className='heading d-flex align-items-center mb-4'>
              <div className='black-circle me-3'>
                  <svg className="sbi_new_logo fa-instagram fa-w-14" aria-hidden="true"data-fa-processed=""
                      aria-label="Instagram" data-prefix="fab" data-icon="instagram" role="img" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
              </div>
              <h4>fmocde</h4>
          </div>
          <Container className=''>
              <Row>
                  <Col md={3} className='ps-0'>
                      <Card className="text-white">
                          <CardImg alt='' variant="top" className="card-img" src="/assets/images/gallery/NITDA _farm_visit.jpeg" />
                      </Card>
                  </Col>
                  <Col md={3} className='ps-0'>
                      <Card className="text-white">
                          <CardImg alt='' variant="top" className="card-img" src="/assets/images/news-5.jpeg"/>
                          <CardImgOverlay className="">
                              <CardBody>
                                  <CardText>
                                      <svg className="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                    </svg>
                                  </CardText>
                              </CardBody>
                          </CardImgOverlay>
                      </Card>
                  </Col>
                  <Col md={3} className='ps-0'>
                      <Card className="text-white">
                          <CardImg alt='' variant="top" className="card-img" src="/assets/images/news-6.jpeg" />
                          <CardImgOverlay className="">
                              <CardBody>
                                  <CardText>
                                      <svg className="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                    </svg>
                                  </CardText>
                              </CardBody>
                          </CardImgOverlay>
                      </Card>
                  </Col>
                  <Col md={3} className='ps-0'>
                      <Card className="text-white">
                          <CardImg alt='' variant="top" className="card-img" src="/assets/images/gallery/inauguration_reception.jpg" />
                          <CardImgOverlay className="">
                              <CardBody>
                                  <CardText>
                                      <svg className="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                    </svg>
                                  </CardText>
                              </CardBody>
                          </CardImgOverlay>
                      </Card>
                  </Col>
              </Row>
          </Container>
          <Container className='d-flex justify-content-center mt-5 pb-2'>
              <div className='follow-btns'>
                  <Link href="https://www.instagram.com/fmocde/" 
                      target="_blank" 
                      className='btn btn-sm'
                      style={{backgroundColor: '#262626', color: 'white'}}
                  >Load More</Link>
                  <Link href="https://www.instagram.com/fmocde/" 
                      target="_blank" className='btn btn-sm ms-2' 
                      style={{backgroundColor: 'rgb(64,139,209)', color: 'white'}}
                  >
                      <svg className="me-2 sbi_new_logo fa-instagram fa-w-14" aria-hidden="true"data-fa-processed=""
                      aria-label="Instagram" data-prefix="fab" data-icon="instagram" role="img" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                      Follow on Instagram
                  </Link>
              </div>
          </Container>
      </Container>
    </ContainerLayout>
  </>
  )
}

export default Landing