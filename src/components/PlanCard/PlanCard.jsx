import { Container, Row, Col, Accordion } from "react-bootstrap"
import './PlanCard.css'
import SavedPlanRow from "../SavedPlanRow/SavedPlanRow"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import tripServices from "../../services/trips.services"
import googlePlcesServices from "../../services/googlePlacesAPI"

import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FaTheaterMasks } from "react-icons/fa";
import { RiGalleryLine } from "react-icons/ri";


const PlanCard = () => {

    const { id } = useParams()

    const [recomendations, setRecomendations] = useState([])
    const indexArray = []

    useEffect(() => {
        tripServices
            .getTripById(id)
            .then(result => {
                const { lat, lng } = result.data.result.destinationCoords
                googlePlcesServices
                    .getPlaceBycoords(lat, lng)
                    .then(res => {
                        setRecomendations(res.data.places)
                        // recomendations.forEach(e => indexArray.push(e.id))
                        googlePlcesServices
                            .getPlacesPhoto(recomendations)
                            .then(res => console.log(res))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <div className="PlanCard">
            <Container>

                <Row className="row" style={{ color: '#011e3d', borderRadius: '5px', padding: "10px" }}>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header style={{ backgroundColor: " #e5e9ec" }}><h3>Saved to the Plan</h3></Accordion.Header>
                            <Accordion.Body>
                                <SavedPlanRow />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>

                <h3 className="mt-5 mb-3">Te puede interesar!</h3>

                < Row className="mt-5"  >
                    {recomendations.length > 0 && recomendations.map(e => {

                        return (
                            <Col key={e.id} className="mb-5">
                                <div className="recomedationCard">
                                    {(e.types.includes("tourist_attraction") || e.types.includes("museum")) && <h1 ><HiOutlineBuildingLibrary className="placeIcon" /></h1>}
                                    {e.types.includes("art_gallery") && <h1 ><RiGalleryLine className="placeIcon" /></h1>}
                                    {e.types.includes("performing_arts_theater") && <h1 ><FaTheaterMasks className="placeIcon" /></h1>}

                                    <div className="details">
                                        <h5>{e.displayName.text}</h5>
                                        <h6 className="mt-3">Valoraciones: {e.rating}</h6>
                                        <h6>{e.formattedAddress}</h6>
                                        {e.currentOpeningHours && <p>Suele estar abierto : {e.currentOpeningHours.weekdayDescriptions[0].split(' ').slice(1)}</p>}

                                        <div sm={6} className="saveButton mt-3">Save to Plan</div>
                                    </div>
                                </div>

                            </Col>
                        )
                    }
                    )}
                </Row>
            </Container>
        </div >
    )

}

export default PlanCard