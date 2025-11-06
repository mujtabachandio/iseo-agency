import { personalData } from '@/app/(pages)/home/data'
import { Col, Container, Row } from 'react-bootstrap'

const Resume = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">Experience</span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3">Experience Breakdown</h2>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              With over 10 years of digital marketing experience, iSeoAgency brings expertise across all major SEO services. Our focus on white-hat marketing ensures sustainable, long-term results for your business.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="d-flex flex-wrap justify-content-center mt-4 mt-md-5">
              {
                personalData.map((item, idx) => {
                  return (
                    <div key={idx} className="mx-3 ms-sm-0 mb-3 card-bg rounded p-3 pe-4 p-md-3 pe-md-5 shadow-sm">
                      <div className="d-flex align-items-center">
                        <div className="thumb-md d-flex flex-wrap justify-content-center align-items-center">
                          {item.image.endsWith('.mp4') ? (
                            <video src={item.image} height={60} width={60} autoPlay loop muted playsInline poster={'/doc/logo.png'} style={{ height: '60px', width: '60px', objectFit: 'contain' }} />
                          ) : (
                            <img src={item.image} alt='logos' height={60} width={60} onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1529336953121-a0fc1f02177d?auto=format&fit=crop&w=80&q=60' }} style={{ height: '60px', width: '60px', objectFit: 'contain' }} />
                          )}
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 fw-medium text-gray-700">{item.name}</h6>
                          <p className="text-muted mb-0 fs-12">{item.experience} Experience</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Resume