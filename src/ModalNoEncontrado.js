import React from 'react'
import ReactDOM from 'react-dom'
import './ModalNoEncontrado.css'

function ModalNoEncontrado ({ children }) {
  return ReactDOM.createPortal(
        <div className='ModalNoEncontrado'>
            {children}
        </div>, document.getElementById('modalNoEncontrado')

  )
}

export { ModalNoEncontrado }
