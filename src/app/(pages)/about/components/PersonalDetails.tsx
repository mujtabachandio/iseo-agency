
import { Col, Container, Row } from 'react-bootstrap'
import { personalData } from '../data'

const PersonalDetails = () => {
  return (
    <section className="section">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="align-self-center">
            <img src={'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60'} alt='personal2' className="img-fluid ml-lg-5" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60' }} />
          </Col>
          <Col lg={6} className="ms-auto align-self-center">
            <h5 className="fs-24 text-dark fw-medium mb-3"><mark>Our Mission</mark></h5>
            <h4 className="fw-normal lh-base text-gray-700 mb-5 fs-20">iSeoAgency is driven by a singular mission to deliver sustainable, measurable organic growth and help businesses dominate their niche in the digital landscape.
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
            {/* Personal details and social icons removed as per client request */}
          </Col>
          <Col xs={12} className="mt-5">
            <Row className="g-3 g-md-4">
              {
                personalData.map((item, idx) => (
                  <Col xs={6} sm={6} md={6} lg={6} key={idx}>
                    <div className="card-bg rounded p-3 p-md-3 p-lg-4 shadow-sm h-100 experience-card">
                      <div className="d-flex align-items-center">
                        <div className="thumb-md d-flex flex-shrink-0 justify-content-center align-items-center experience-icon">
                          {item.image.endsWith('.mp4') ? (
                            <video 
                              src={item.image} 
                              height={60} 
                              width={60} 
                              autoPlay 
                              loop 
                              muted 
                              playsInline 
                              poster={'/doc/logo.png'} 
                              style={{ height: '60px', width: '60px', objectFit: 'contain' }} 
                            />
                          ) : (
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              height={60} 
                              width={60} 
                              onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1529336953121-a0fc1f02177d?auto=format&fit=crop&w=80&q=60' }} 
                              style={{ height: '60px', width: '60px', objectFit: 'contain' }} 
                            />
                          )}
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <h6 className="mb-1 fw-medium text-gray-700 experience-title">{item.name}</h6>
                          <p className="text-muted mb-0 fs-12 experience-text">{item.experience} Experience</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PersonalDetails