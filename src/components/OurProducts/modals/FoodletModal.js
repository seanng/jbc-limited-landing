import Modal from 'react-bootstrap/Modal'
import React from 'react'
import closeIcon from '../../../assets/img/close.svg';

export default function FoodletModal ({hide}) {
  return (
    <Modal.Body>
      <div className="d-flex flex-row-reverse">
        <img onClick={hide} alt="close" src={closeIcon} style={{ width: '40px', cursor: 'pointer', color: '#4A4A4A' }} />
      </div>
      FOODLET
    </Modal.Body>
  )
}
