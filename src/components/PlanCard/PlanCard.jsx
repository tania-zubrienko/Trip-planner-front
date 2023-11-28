import { Container, Row, Col, Accordion } from "react-bootstrap"
import './PlanCard.css'
import image from './../../assets/cabeceraProvisional.jpg'

const PlanCard = () => {

    return (

        <div className="PlanCard">
            <Container>

                <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header style={{ backgroundColor: " #e5e9ec" }}><h3>Saved to the Plan</h3></Accordion.Header>
                            <Accordion.Body>
                                <h3></h3>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>

                <h1 className="mt-5 mb-3">Do not miss it!</h1>


                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div className="button mt-5">Save to Plan</div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div className="button mt-5">Save to Plan</div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div className="button mt-5">Save to Plan</div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <figure>
                            <img src={image} alt="" />
                        </figure>
                    </Col>
                    <Col md={{ offset: 1, span: 5 }}>
                        <h2>Perfect sign for photos</h2>
                        <h3 className="mt-3">★★★★☆</h3>
                        <h5 className="mt-3">Free admision</h5>
                        <h5 className="mt-3">6,7 km</h5>
                        <div className="button mt-5">Save to Plan</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default PlanCard