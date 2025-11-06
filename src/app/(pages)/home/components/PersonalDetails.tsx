import { personalData } from '../data'

import { Col, Container, Row } from 'react-bootstrap'

const PersonalDetails = () => {
  return (
    <section className="section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="align-self-center">
            <h5 className="fs-24 text-dark fw-medium"><mark>Our Mission</mark></h5>
            <h4 className="fw-normal lh-base text-gray-700 mb-4 fs-20">iSeoAgency is driven by a singular mission to deliver sustainable, measurable organic growth and help businesses dominate their niche in the digital landscape.
            </h4>
            <div className="mb-4">
              <h6 className="fw-medium text-dark mb-3">Experience Highlights:</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><span className="text-muted">✓</span> 10+ Years Digital Marketing Service Experience</li>
                <li className="mb-2"><span className="text-muted">✓</span> Focus On White-Hat Marketing</li>
                <li className="mb-2"><span className="text-muted">✓</span> Dedicated SEO Manager for Every Client</li>
                <li className="mb-2"><span className="text-muted">✓</span> Transparent Monthly Reporting</li>
              </ul>
            </div>
            {/* Social icons removed as per client request */}
          </Col>
          {/* Personal details column removed as per client request */}
          <Col xs={12} className="mt-5">
            <div className="d-flex flex-wrap justify-content-center  mt-4 mt-md-5">
              {
                personalData.map((item, idx) => {
                  return (
                    <div key={idx} className="mx-3 ms-sm-0 ms-sm-0 mb-3 card-bg rounded p-3 pe-4 p-md-3 pe-md-5 shadow-sm">
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

export default PersonalDetails