import Modal from 'react-bootstrap/Modal'
import React from 'react'
import ModalHeader from './ModalHeader'

export default function FreshDurianModal ({hide}) {
  return (
    <Modal.Body>
      <ModalHeader hide={hide} />
      FreshDurian
    </Modal.Body>
  )
}
