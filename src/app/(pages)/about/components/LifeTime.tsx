import { Col, Container, Row } from 'react-bootstrap'

const LifeTime = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase"></span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">Our Focus:</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              We combine technical expertise with creative content strategy to offer a full service SEO solution. Our focus is always on your ROI and long-term search authority.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {/* Timeline removed - replaced with Our Focus section */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LifeTime