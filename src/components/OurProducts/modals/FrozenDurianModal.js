import Modal from 'react-bootstrap/Modal'
import React from 'react'
import ModalHeader from './ModalHeader'

export default function FrozenDurianModal ({hide}) {
  return (
    <Modal.Body>
      <ModalHeader hide={hide} />
      FrozenDurian
    </Modal.Body>
  )
}
