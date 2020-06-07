import Modal from 'react-bootstrap/Modal'
import React from 'react'
import ModalHeader from './ModalHeader'

export default function DurianPasteModal ({hide}) {
  return (
    <Modal.Body>
      <ModalHeader hide={hide} />
      Durian Paste
    </Modal.Body>
  )
}
