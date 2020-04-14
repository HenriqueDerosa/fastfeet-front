import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Box } from './styles'

const Modal = ({ closeEvent, children }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const close = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeEvent()
      }
    }
    document.addEventListener('mousedown', close)

    return () => {
      document.removeEventListener('mousedown', close)
    }
  }, [closeEvent, modalRef])

  return (
    <Container>
      <Box ref={modalRef}>{children}</Box>
    </Container>
  )
}

Modal.propTypes = {
  closeEvent: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Modal.defaultProps = {
  closeEvent: () => {},
}

export default Modal
