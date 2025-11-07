import { useState } from 'react'
import { Button, Form, Offcanvas } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextFormInput from './form/TextFormInput'
import CheckboxFormInput from './form/CheckboxFormInput'
import IconifyIcon from './wrappers/IconifyIcon'

type ContactFormData = {
  websiteUrl: string
  marketingChallenges: string[]
  otherChallenge?: string
  services: string[]
  name: string
  email: string
  whatsapp: string
}

const marketingChallenges = [
  { value: 'low-traffic', label: 'Low Website Traffic' },
  { value: 'not-ranking', label: 'Not Ranking on Google' },
  { value: 'poor-conversion', label: 'Poor Conversion Rate' },
  { value: 'seo', label: 'SEO' },
  { value: 'local-visibility', label: 'Local Visibility' },
  { value: 'other', label: 'Other (Please specify)' },
]

const services = [
  { value: 'seo-services', label: 'SEO Services' },
  { value: 'off-page-seo', label: 'Off-Page SEO' },
  { value: 'social-media', label: 'Social Media Engagement' },
  { value: 'gmb', label: 'Google My Business Page' },
  { value: 'seo-audit', label: 'SEO Audit Report' },
  { value: 'ppc', label: 'Google Pay Per Click' },
]

const contactFormSteps = [
  { 
    name: 'websiteUrl' as const, 
    label: "What's Your Website URL?", 
    placeholder: 'e.g. www.iseoAgency.com', 
    type: 'text' as const,
    question: "What's Your Website URL?"
  },
  { 
    name: 'marketingChallenges' as const, 
    label: "What's Your Biggest Marketing Challenge Right Now?", 
    type: 'checkbox' as const,
    question: "What's Your Biggest Marketing Challenge Right Now?"
  },
  { 
    name: 'services' as const, 
    label: 'Which Services Are You Interested In?', 
    type: 'checkbox' as const,
    question: 'Which Services Are You Interested In?'
  },
  { 
    name: 'name' as const, 
    label: 'Your Name', 
    placeholder: 'John Smith', 
    type: 'text' as const,
    question: 'Your Name'
  },
  { 
    name: 'email' as const, 
    label: 'Your Best Email', 
    placeholder: 'john.smith@example.com', 
    type: 'email' as const,
    question: 'Your Best Email'
  },
  { 
    name: 'whatsapp' as const, 
    label: 'Your WhatsApp Number', 
    placeholder: '+1 (555) 123-567', 
    type: 'text' as const,
    question: 'Your WhatsApp Number'
  },
]

const ContactFormDropdown = () => {
  const [show, setShow] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const messageSchema = yup.object({
    websiteUrl: yup.string().required('Please enter your website URL'),
    marketingChallenges: yup.array().min(1, 'Please select at least one challenge'),
    otherChallenge: yup.string(),
    services: yup.array().min(1, 'Please select at least one service'),
    name: yup.string().required('Please enter your name'),
    email: yup.string().email().required('Please enter your email'),
    whatsapp: yup.string().required('Please enter your WhatsApp number'),
  })

  const { handleSubmit, control, trigger, watch, formState: { errors } } = useForm<ContactFormData>({
    resolver: yupResolver(messageSchema),
    mode: 'onChange',
    defaultValues: {
      websiteUrl: '',
      marketingChallenges: [],
      services: [],
      name: '',
      email: '',
      whatsapp: '',
    }
  })
  
  const marketingChallengesValue = watch('marketingChallenges')

  const handleClose = () => {
    setShow(false)
    setCurrentStep(0)
  }

  const handleShow = () => setShow(true)

  const handleNext = async () => {
    const currentField = contactFormSteps[currentStep].name
    let isValid = false
    
    // For checkbox fields, check if at least one is selected
    if (currentField === 'marketingChallenges' || currentField === 'services') {
      const value = watch(currentField)
      isValid = Array.isArray(value) && value.length > 0
    } else {
      isValid = await trigger(currentField)
    }
    
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
        style={{ width: '500px', maxWidth: '90vw' }}
      >
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title className="fw-bold fs-20">Let's Build Your Digital Success Story!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-4">
          <p className="text-muted fs-14 mb-4">Tell us about your goals and we'll craft a custom strategy</p>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <span className="fw-bold fs-18 me-2">{currentStep + 1}.</span>
                <span className="fw-medium text-dark fs-16">{currentField.question}</span>
              </div>
            </div>

            <div className="mb-4">
              {currentField.type === 'checkbox' ? (
                currentField.name === 'marketingChallenges' ? (
                  <>
                    <CheckboxFormInput<ContactFormData>
                      control={control}
                      name="marketingChallenges"
                      label=""
                      options={marketingChallenges}
                      columns={2}
                    />
                    {marketingChallengesValue?.includes('other') && (
                      <div className="mt-3">
                        <div className="d-flex align-items-center mb-2">
                          <span className="fw-bold fs-18 me-2">2.</span>
                        </div>
                        <TextFormInput<ContactFormData>
                          control={control}
                          name="otherChallenge"
                          placeholder="Please specify"
                          label=""
                          type="text"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <CheckboxFormInput<ContactFormData>
                control={control}
                    name="services"
                    label=""
                    options={services}
                    columns={2}
              />
                )
            ) : (
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="fw-bold fs-18 me-2">2.</span>
                  </div>
              <TextFormInput<ContactFormData>
                control={control}
                name={currentField.name}
                placeholder={currentField.placeholder}
                    label=""
                type={currentField.type === 'email' ? 'email' : 'text'}
              />
                </div>
            )}

            {errors[currentField.name] && (
                <div className="text-danger fs-12 mt-2">
                {errors[currentField.name]?.message as string}
              </div>
            )}
            </div>

            <div className="d-flex gap-2 mt-4">
              {currentStep > 0 && (
                <Button
                  variant="outline-secondary"
                  onClick={handlePrevious}
                  className="flex-fill"
                  type="button"
                >
                  Previous
                </Button>
              )}
              <Button
                variant="primary"
                onClick={handleNext}
                className={currentStep === 0 ? 'w-100' : 'flex-fill'}
                type="button"
                style={{
                  background: 'linear-gradient(90deg, #00bcd4 0%, #69c380 100%)',
                  border: 'none',
                  fontWeight: 500
                }}
              >
                {currentStep === contactFormSteps.length - 1 ? 'Get My Free Consultation' : 'Next'}
              </Button>
            </div>
            
            <p className="text-center text-muted fs-12 mt-3 mb-0">We respect your privacy</p>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ContactFormDropdown

