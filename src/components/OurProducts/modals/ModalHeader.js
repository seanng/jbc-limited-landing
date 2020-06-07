import React from 'react'
import closeIcon from '../../../assets/img/close.svg';

export default function ModalHeader ({ hide }) {
  return (
    <div className="d-flex flex-row-reverse">
      <img onClick={hide} alt="close" src={closeIcon} style={{ width: '40px', cursor: 'pointer', color: '#4A4A4A' }} />
    </div>
  )
}
