
import imageP1 from '@/assets/images/p-1.svg'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
    if (emailInput?.value) {
      // Handle email submission here
      console.log('Email submitted:', emailInput.value)
      alert('Thank you! We will contact you soon.')
      form.reset()
    }
  }

  return (
    <section className="section bg-light cta-pettern">
      <Container >
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pattern-1 position-absolute">
              <img src={imageP1} alt='imageP1' height={80} />
            </div>
            <h2 className="text-dark" style={{ lineHeight: '1.5', position: 'relative' }}>iSeoAgency Available For Your Digital Growth</h2>
            <p className="text-muted mb-0">We combine technical expertise with creative content strategy to offer a full service SEO solution. Our focus is always on your ROI and long-term search authority.</p>
          </Col>
          <Col lg={6} className="ml-auto">
            <div className="cta-search">
              <form className="position-relative" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email Address" required />
                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox