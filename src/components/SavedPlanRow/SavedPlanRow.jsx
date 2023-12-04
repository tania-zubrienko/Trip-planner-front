import { Col, Row, Modal } from 'react-bootstrap'
import { IoLocationOutline } from 'react-icons/io5'
import cabeceraProvisional from '../../assets/cabeceraProvisional.jpeg'
import './SavedPlanRow.css'
import { useEffect, useState } from 'react'
import PlanDetails from '../PlanDetails/PlanDetails'

//myPlans
const SavedPlanRow = ({ }) => {

    const [showModal, setShowModal] = useState(false)
    const createModal = () => {
        setShowModal(true)
    }




    return (

        <div className='SavedPlanRow'>

            <Row className='align-items-center' onClick={createModal}>
                <Col xs={1}>
                    <IoLocationOutline className='icon' />
                </Col>
                <Col xs={10} sm={9}>
                    <h5>Chapultepec Castle</h5>
                    <p>9AM  - 5PM Monday closed. 4,51€.</p>
                </Col>
                <Col sm={2}>
                    <img className='plan-img' src={cabeceraProvisional} alt='' />
                </Col>
            </Row>

            {/* {
                myPlans.map(elm => {
                    return (

                        <Row className='align-items-center' onClick={createModal}>
                            <Col xs={1}>
                                <IoLocationOutline className='icon' />
                            </Col>
                            <Col xs={10} sm={9}>
                                <h5>{elm.name}</h5>
                                <p>{elm.abierto}</p>
                            </Col>
                            <Col sm={2}>
                                <img className='plan-img' src={elm.photo} alt='' />
                            </Col>
                        </Row>
                    )
                }
                )
            } */}

            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Detalle del Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <PlanDetails />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default SavedPlanRow