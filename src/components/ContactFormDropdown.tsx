import { useState } from 'react'
import { Button, Form, Offcanvas } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextFormInput from './form/TextFormInput'
import TextAreaFormInput from './form/TextAreaFormInput'
import IconifyIcon from './wrappers/IconifyIcon'

type ContactFormData = {
  name: string
  email: string
  subject: string
  contact: string
  message: string
}

const contactFormSteps = [
  { name: 'name' as const, label: 'Name', placeholder: 'Your name', type: 'text' as const },
  { name: 'email' as const, label: 'Email', placeholder: 'Your email', type: 'email' as const },
  { name: 'subject' as const, label: 'Subject', placeholder: 'Your subject', type: 'text' as const },
  { name: 'contact' as const, label: 'Contact', placeholder: 'Your contact', type: 'text' as const },
  { name: 'message' as const, label: 'Message', placeholder: 'Your message', type: 'textarea' as const },
]

const ContactFormDropdown = () => {
  const [show, setShow] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const messageSchema = yup.object({
    name: yup.string().required('Please enter name'),
    email: yup.string().email().required('Please enter email'),
    subject: yup.string().required('Please enter subject'),
    contact: yup.string().required('Please enter contact'),
    message: yup.string().required('Please enter message'),
  })

  const { handleSubmit, control, trigger, formState: { errors } } = useForm<ContactFormData>({
    resolver: yupResolver(messageSchema),
    mode: 'onChange',
  })

  const handleClose = () => {
    setShow(false)
    setCurrentStep(0)
  }

  const handleShow = () => setShow(true)

  const handleNext = async () => {
    const currentField = contactFormSteps[currentStep].name
    const isValid = await trigger(currentField)
    
    if (isValid) {
      if (currentStep < contactFormSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        handleSubmit(onSubmit)()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data)
    // Handle form submission here
    handleClose()
  }

  const currentField = contactFormSteps[currentStep]

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="btn-sm nav-btn mb-4 mb-lg-0"
        style={{ position: 'relative', backgroundColor: '#0d6efd', borderColor: '#0d6efd', color: '#ffffff' }}
      >
        Get in touch <IconifyIcon icon='feather:chevrons-right' className="icon-xxs ms-1" />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: '400px' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Get in touch!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted fs-14">
                  Step {currentStep + 1} of {contactFormSteps.length}
                </span>
                <div className="d-flex gap-2">
                  {Array.from({ length: contactFormSteps.length }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`rounded-circle ${idx <= currentStep ? 'bg-primary' : 'bg-light'}`}
                      style={{ width: '8px', height: '8px' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {currentField.type === 'textarea' ? (
              <TextAreaFormInput<ContactFormData>
                control={control}
                name={currentField.name}
                placeholder={currentField.placeholder}
                label={currentField.label}
              />
            ) : (
              <TextFormInput<ContactFormData>
                control={control}
                name={currentField.name}
                placeholder={currentField.placeholder}
                label={currentField.label}
                type={currentField.type === 'email' ? 'email' : 'text'}
              />
            )}

            {errors[currentField.name] && (
              <div className="text-danger fs-12 mt-1">
                {errors[currentField.name]?.message as string}
              </div>
            )}

            <div className="d-flex gap-2 mt-4">
              {currentStep > 0 && (
                <Button
                  variant="outline-secondary"
                  onClick={handlePrevious}
                  className="flex-fill"
                >
                  Previous
                </Button>
              )}
              <Button
                variant="primary"
                onClick={handleNext}
                className={currentStep === 0 ? 'w-100' : 'flex-fill'}
                type="button"
              >
                {currentStep === contactFormSteps.length - 1 ? 'Send Message' : 'Next'}
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ContactFormDropdown

