import './FriendList.css'
import { Button, Modal, Form, InputGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import userServices from '../../services/user.services'
import FriendCard from '../Cards/FriendCard/FriendCard'

const FriendList = () => {

    const [userSearch, setUserSearch] = useState('')
    const [friends, setFriends] = useState([])
    const [show, setShow] = useState(false)
    const [state, setState] = useState(false)

    function handleClose() {

        setUserSearch('')
        setShow(false)

    }

    function handleShow() {

        setUserSearch('')
        setShow(true)
        setState(!state)

    }

    function searchHandler(e) {
        setUserSearch(e.target.value)
    }


    function getList() {
        userServices
            .getFriendList()
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }

    function handlerDeleteFriend(e) {
        const friendId = e.target.value

        userServices
            .deleteFriend(friendId)
            .then(getList())
            .catch(err => console.log(err))

        setState(!state)
    }

    useEffect(() => { getList() }, [state])

    return (
        <div>
            {friends.map((e, i) => {
                return (
                    <div className='FriendList' key={i}>
                        <FriendCard friend={e} key={i} />
                        <button className="deleteFriend" value={e._id} onClick={handlerDeleteFriend}></button>
                    </div>
                )
            })}

            <div className="d-flex justify-content-center mt-5">
                <Button className='myButton2' onClick={handleShow}>
                    Añadir amigos
                </Button>
            </div>

            <Modal size='lg' show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir amigos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='inputField'>
                        <label>Email :</label>
                        <input type='text' value={userSearch} onChange={searchHandler} placeholder='Email de usuario' />
                    </div>
                    <SearchBar userToFind={userSearch} friends={friends} handler={{ setState, state, }} closeModal={handleClose} refresh={getList} />
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-around'>
                    <Button className='myButton' onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default FriendList