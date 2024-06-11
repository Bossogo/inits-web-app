import DualSection from '../components/DualSection'
import "./index.scss"
import ColouredContainer from '../components/layouts/ColouredContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoBox from '../components/InfoBox';

type Props = {}

const Initiatives = (props: Props) => {
    return (<>
        <ColouredContainer>
            <DualSection
                title={{
                    text: "Our Initiatives",
                    className: 'title__big title__big-primary mb-2'
                }}
                paragraph={{
                    text:
                        [
                            'To achieve our set objectives, the Ministry of Communications, Innovation & Digital Economy has embarked on several critical initiatives and programmes to drive inclusive growth and develop our digital economy.'
                        ],
                    className: 'text__big'
                }}
                className="col-8 ms-5"
            />
        </ColouredContainer>
        <Container fluid className='px-5 pt-5'>
            <Row>
                <Col>
                    <InfoBox title='3 Million Technical Talent (3MTT) Programme'
                        text='The 3MTT programme is aimed at building Nigeria’s technical talent backbone to power our digital economy and position Nigeria as a net talent exporter'
                    />
                </Col>
                <Col>
                    <InfoBox 
                        title='Nigeria Artificial Intelligence Research Scheme'
                        text='The scheme aims to foster a vibrant and sustainable AI ecosystem in Nigeria by providing financial support, facilitating knowledge sharing and collaboration.'
                    />
                </Col>
                <Col>
                    <InfoBox
                        title='National Artificial Intelligence Strategy'
                        text='This initiative will steer the AI revolution towards achieving national goals around job creation, social inclusion, and sustainable development.'
                    />
                </Col>
            </Row>

            <Row className='mt-4 pt-1'>
                <Col>
                    <InfoBox 
                        title='Digital Nigeria'
                        text='The Digital Nigeria programme was launched as one of the Federal Government’s key initiatives to empower innovators and entrepreneurs with skills required to thrive in our emerging digital economy.'
                    />
                </Col>
                <Col>
                    <InfoBox 
                        title='Local Content & Capacity'
                        text='This will enable the ICT industry to contribute meaningfully towards the achievement of national development targets and stimulate the production, sales, and consumption of high-quality IT products.'
                    />
                </Col>
                <Col>
                    <InfoBox
                        title='E-Government Initiatives'
                        text='The Ministry has set four (4) key goals to drive the adoption of e-government across all MDAs, namely connected government, informed citizenry, open data, and open government partnership.'
                    />
                </Col>
            </Row>
        </Container>
    </>

    )
}
export default Initiatives