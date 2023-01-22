import { Rating } from '@mui/material';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { handleadd } from '../Redux/Actions';

function Addmovie() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [title,setTitle] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [description,setDescription] = useState('')
    const [rating,setRating] = useState(0)

    const dispatch = useDispatch()

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setTitle(e.target.value) }
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setPosterURL(e.target.value) }
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Movie description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value) }/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Movie rate</Form.Label>
              
              <Rating name="simple-controlled" onChange={(e)=>setRating(e.target.value)} />
            </Form.Group>
          
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();dispatch(handleadd({title,posterURL,description,rating,id:Math.random()}))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addmovie