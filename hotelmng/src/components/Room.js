import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function Room({room}) {
  
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div className='row bs'>
        <div className="col-md-4">
             <img src={room.imageurls[0]} classname='smalling' />
        
        </div>
        <div className="col-md-7">
             <h1>{room.name}</h1>
             <p>Max Count : {room.maxcount}</p>
             <p>Phone Number : {room.phonenumber}</p>
             <p>type : {room.type}</p>
             <div>
                 <button className='btn btn-primary' onClick={handleShow}>View Details</button>
             </div>
        </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
          
          {room.imageurls.map(url=>{
            return <Carousel.Item>
              <img className='d-block w-100 bigimg' src={url}/>
              <Carousel.Caption>
             <h3>Third slide label</h3>
             <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
             </Carousel.Caption>
             </Carousel.Item>
          })}
        </Carousel>
        <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  
      </div>
    )
      
}
    
export default Room