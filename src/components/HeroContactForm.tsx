import { useState } from 'react'
import { Button, Card, CardBody, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextFormInput from './form/TextFormInput'
import CheckboxFormInput from './form/CheckboxFormInput'
import SuccessModal from './SuccessModal'

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

const HeroContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const messageSchema = yup.object({
    websiteUrl: yup
      .string()
      .required('Please enter your website URL')
      .matches(
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        'Please enter a valid website URL'
      ),
    marketingChallenges: yup
      .array()
      .min(1, 'Please select at least one challenge')
      .required('Please select at least one challenge'),
    otherChallenge: yup.string().when('marketingChallenges', {
      is: (challenges: string[]) => challenges?.includes('other'),
      then: (schema) => schema.required('Please specify your challenge'),
      otherwise: (schema) => schema,
    }),
    services: yup
      .array()
      .min(1, 'Please select at least one service')
      .required('Please select at least one service'),
    name: yup
      .string()
      .required('Please enter your name')
      .min(2, 'Name must be at least 2 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
    whatsapp: yup
      .string()
      .required('Please enter your WhatsApp number')
      .matches(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/, 'Please enter a valid phone number'),
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

  const handleNext = async () => {
    const currentField = contactFormSteps[currentStep].name
    let isValid = false
    
    // For checkbox fields, check if at least one is selected
    if (currentField === 'marketingChallenges' || currentField === 'services') {
      const value = watch(currentField)
      isValid = Array.isArray(value) && value.length > 0
      
      // If "other" is selected in marketing challenges, validate otherChallenge field
      if (currentField === 'marketingChallenges' && value?.includes('other')) {
        const otherValid = await trigger('otherChallenge')
        isValid = isValid && otherValid
      }
    } else {
      isValid = await trigger(currentField)
    }
    
    if (isValid) {
      if (currentStep < contactFormSteps.length - 1) {
        // Smooth transition to next step
        setTimeout(() => {
          setCurrentStep(currentStep + 1)
        }, 150)
      } else {
        handleSubmit(onSubmit)()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      // Smooth transition to previous step
      setTimeout(() => {
        setCurrentStep(currentStep - 1)
      }, 150)
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', data)
      // Here you would typically send data to your backend
      // await submitForm(data)
      
      // Show success modal
      setShowSuccessModal(true)
      
      // Reset form after a delay
      setTimeout(() => {
        setCurrentStep(0)
        setIsSubmitting(false)
      }, 2000)
    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitting(false)
    }
  }
  
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false)
    // Reset form when modal is closed
    setCurrentStep(0)
    setIsSubmitting(false)
  }

  const currentField = contactFormSteps[currentStep]

  return (
    <>
      <Card 
        className="border-0 shadow-lg w-100 form-card" 
        style={{ 
          borderRadius: '12px',
          transition: 'all 0.3s ease-in-out',
          opacity: 1,
          transform: 'translateY(0)'
        }}
      >
        <CardBody className="p-4 p-lg-5">
          <h2 className="fw-bold fs-20 mb-2">Let's Build Your Digital Success Story!</h2>
          <p className="text-muted fs-14 mb-4">Tell us about your goals and we'll craft a custom strategy</p>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div 
              className="mb-4 form-step-content"
              style={{
                minHeight: '200px',
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <span className="fw-bold fs-18 me-2">{currentStep + 1}.</span>
                <span className="fw-medium text-dark fs-16">{currentField.question}</span>
              </div>

              <div className="mt-3">
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
                        <div className="mt-3" style={{ animation: 'fadeIn 0.3s ease-in' }}>
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
                  <div className="text-danger fs-12 mt-2" style={{ animation: 'shake 0.3s ease-in-out' }}>
                    {errors[currentField.name]?.message as string}
                  </div>
                )}
              </div>
            </div>

            <div className="d-flex gap-2 mt-4">
              {currentStep > 0 && (
                <Button
                  variant="outline-secondary"
                  onClick={handlePrevious}
                  className="flex-fill"
                  type="button"
                  disabled={isSubmitting}
                  style={{ transition: 'all 0.2s ease-in-out' }}
                >
                  Previous
                </Button>
              )}
              <Button
                variant="primary"
                onClick={handleNext}
                className={currentStep === 0 ? 'w-100' : 'flex-fill'}
                type="button"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? '#ccc' 
                    : 'linear-gradient(90deg, #00bcd4 0%, #69c380 100%)',
                  border: 'none',
                  fontWeight: 500,
                  transition: 'all 0.3s ease-in-out',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Submitting...
                  </>
                ) : (
                  currentStep === contactFormSteps.length - 1 ? 'Get My Free Consultation' : 'Next'
                )}
              </Button>
            </div>
            
            <p className="text-center text-muted fs-12 mt-3 mb-0">We respect your privacy</p>
          </Form>
        </CardBody>
      </Card>
      
      <SuccessModal show={showSuccessModal} onHide={handleCloseSuccessModal} />
    </>
  )
}

export default HeroContactForm

