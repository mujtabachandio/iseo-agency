import { Col, Container, Row } from 'react-bootstrap'

const LifeTime = () => {
  return (
    <section className="section" id="resume">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase"></span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Our Focus:</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
            We combine technical expertise with creative content strategy to offer a full service SEO solution. Our focus is always on your ROI and long-term search authority.
            </p>
          </Col>
        </Row>
        {/* Education and Experience sections removed as per client request */}
      </Container>
    </section>
  )
}

export default LifeTime