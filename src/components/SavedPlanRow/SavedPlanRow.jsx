import { Col, Row, Modal } from 'react-bootstrap'
import { IoLocationOutline } from 'react-icons/io5'
import './SavedPlanRow.css'
import { useState } from 'react'
import PlanDetails from '../PlanDetails/PlanDetails'
import placeServices from '../../services/places.services'
import tripServices from '../../services/trips.services'
import { useParams } from 'react-router-dom'

const SavedPlanRow = ({ myPlans, refresh }) => {

    const { id } = useParams()

    const [showModal, setShowModal] = useState(false)
    const [currentPlace, setCurrentPlace] = useState()
    const [currentId, setCurrentId] = useState("")


    function createModal() {

        setCurrentPlace()
        setShowModal(true)

    }

    function getPlaceInfo(e) {

        const { value } = e.target
        const buttonId = e.target.id
        setCurrentId(buttonId)
        placeServices
            .getPlaceInfo(value)
            .then(res => setCurrentPlace(res.data))
            .catch(err => console.log(err))

    }

    function refreshInfo() {
        refresh()
        setShowModal(false)
    }

    function deleteTripPlan(e) {

        const { value } = e.target
        const currentId = value

        tripServices
            .deletePlan(id, currentId)
            .then(() => refreshInfo())
            .catch(err => console.log(err))

        refreshInfo()
    }

    return (
        <div className='SavedPlanRow' >
            <Row className='align-items-center' onClick={createModal}>
                {myPlans.length > 0 ?
                    myPlans.map(e => {
                        return (
                            <Col md={{ span: 3, offset: 1 }} key={e._id}>
                                <div className='d-flex  text-align-center align-items-center'>
                                    <p><IoLocationOutline className='icon' /></p>
                                    <button id={e._id} value={e.placeId} onClick={getPlaceInfo} className='placeLink'>{e.name}</button>
                                </div>
                            </Col>)
                    })
                    :
                    <p style={{ color: 'grey' }}>Aún no tienes planes para este dia</p>
                }

            </Row>

            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Detalle del Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <PlanDetails placeInfo={currentPlace} currentId={currentId} refreshInfo={refreshInfo} />
                    <button value={currentId} onClick={deleteTripPlan} className='deleteButton'></button>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default SavedPlanRow