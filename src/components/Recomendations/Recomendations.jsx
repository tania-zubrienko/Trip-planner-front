import './Recomendations.css'
import { Container, Row, Col, Toast } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { HiOutlineBuildingLibrary } from "react-icons/hi2"
import { FaTheaterMasks } from "react-icons/fa"
import { RiGalleryLine } from "react-icons/ri"
import tripServices from "../../services/trips.services"
import searchService from '../../services/searchNearby.services'
import placeServices from '../../services/places.services'



const Recomendations = ({ savePlan }) => {

    const { id } = useParams()

    const [recomendations, setRecomendations] = useState([])
    const [savedPlans, setSavedPlans] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => getTripInfo(id), [])

    function getTripInfo(id) {

        tripServices
            .getTripById(id)
            .then(result => {
                const { lat, lng } = result.data.result.destinationCoords
                setSavedPlans(result.data.result.placesOfInterest)
                return searchService.getPlaceBycoords(lat, lng)
            })
            .then(res => setRecomendations(res.data.places))
            .catch(err => console.log(err))

    }

    function save(e) {

        setShow(true)

        const { value: placeId } = e.target

        placeServices
            .getPlaceInfo(placeId)
            .then(res => {
                const { name } = res.data
                return (
                    tripServices.addPlantoTrip(id, { placeId, name }))
            })
            .catch(err => console.log(err))

        getTripInfo(id)

    }

    return (
        <div className="Recomendations">

            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide className='toastAdd'>
                <Toast.Body>
                    <h5><strong className="me-auto">Plan actualizado</strong></h5>
                </Toast.Body>
            </Toast>

            <Container>
                <h3 className="mt-5 mb-3">Te puede interesar!</h3>
                < Row className="mt-5"  >
                    {recomendations && recomendations.map(e => {
                        return (

                            <Col key={e.id} className="mb-5">
                                <div className="recomedationCard" >
                                    {(e.types.includes("tourist_attraction") || e.types.includes("museum")) && <h1 ><HiOutlineBuildingLibrary className="placeIcon" /></h1>}
                                    {e.types.includes("art_gallery") && <h1 ><RiGalleryLine className="placeIcon" /></h1>}
                                    {e.types.includes("performing_arts_theater") && <h1 ><FaTheaterMasks className="placeIcon" /></h1>}

                                    <div className="details">
                                        <h5>{e.displayName.text}</h5>
                                        <h6 className="mt-3">Valoraciones: {e.rating}</h6>
                                        <h6>{e.formattedAddress}</h6>
                                        {e.currentOpeningHours ? <p>Suele estar abierto : {e.currentOpeningHours.weekdayDescriptions[0].split(' ').slice(1)}</p>
                                            : <p>No hay información sobre el horario </p>}
                                        <button sm={6} className="saveButton mt-3" onClick={save} value={e.id}>Añadir al viaje</button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div >
    )
}

export default Recomendations