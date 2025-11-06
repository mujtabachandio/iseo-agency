import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { splitArray } from '@/utils/array'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { servicesData, ServicesType } from '../data'

const ServicesCard = ({ description, icon, title, variant }: ServicesType) => {
  return (
    <Card className="rounded shadow border-0">
      <CardBody className="p-4 m-2">
        <div className={`${variant} d-flex justify-content-center align-items-center thumb-xl  rounded`}>
          <IconifyIcon icon={icon} className={`align-self-center svg-${variant} icon-md`} />
        </div>
        <h5 className="text-dark fs-22 fw-medium my-4">{title}</h5>
        <p className="text-muted pb-4">{description}</p>
      </CardBody>
    </Card>
  )
}

const Services = () => {
  const services = splitArray(servicesData, 3)
  return (
    <section className="section bg-gradient-light-white">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center position-relative">
            <span className="badge badge-lg rounded  fw-normal fs-13 text-uppercase">.</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">Our SEO Agency Services</h2>
            <div className="bg-text">
              <h1 className="fw-bold p-0">Services</h1>
            </div>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              We combine technical expertise with creative content strategy to offer a full service SEO solution. Our focus is always on your ROI and long-term search authority.
            </p>
          </Col>
        </Row>
        {
          services.map((chunk, idx) => (
            <Row key={idx}>
              {
                chunk.map((item, idx) => (
                  <Col lg={4} md={6} key={idx} className="mt-4 pt-2">
                    <ServicesCard {...item} />
                  </Col>
                ))
              }
            </Row>
          ))
        }
      </Container>
    </section>
  )
}

export default Services