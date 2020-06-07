import Modal from 'react-bootstrap/Modal'
import React from 'react'
import ModalHeader from '../../ModalHeader'

export default function FoodletModal ({hide}) {
  return (
    <Modal.Body>
      <ModalHeader hide={hide} />
      Foodlet
    </Modal.Body>
  )
}
