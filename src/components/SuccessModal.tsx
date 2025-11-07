import { Modal } from 'react-bootstrap'
import IconifyIcon from './wrappers/IconifyIcon'

interface SuccessModalProps {
  show: boolean
  onHide: () => void
}

const SuccessModal = ({ show, onHide }: SuccessModalProps) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="sm"
      className="success-modal"
    >
      <Modal.Body className="text-center p-5">
        <div className="mb-4">
          <div
            className="mx-auto d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #00bcd4 0%, #69c380 100%)',
            }}
          >
            <IconifyIcon
              icon="mdi:check-bold"
              className="text-white"
              style={{ fontSize: '48px' }}
            />
          </div>
        </div>
        <h3 className="fw-bold text-dark mb-3">Thank You!</h3>
        <p className="text-muted mb-4">
          We've received your information. Our team will contact you soon to discuss your digital success story.
        </p>
        <button
          onClick={onHide}
          className="btn btn-primary w-100"
          style={{
            background: 'linear-gradient(90deg, #00bcd4 0%, #69c380 100%)',
            border: 'none',
            fontWeight: 500,
          }}
        >
          Got it!
        </button>
      </Modal.Body>
    </Modal>
  )
}

export default SuccessModal

