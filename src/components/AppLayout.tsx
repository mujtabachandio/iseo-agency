import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { currentYear } from '@/context/constants'
import { ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AppLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {

  return (
    <>
      {children}
      <footer className="footer">
        <Container>
          <Row>
            <Col xs={12} lg={5} className="border-e-dashed mb-4 mb-lg-0">
              <Link to="/">
                <img src={'/logo-removebg-preview.png'} alt='iSeoAgency Logo' height={48} style={{ height: '48px', maxHeight: '48px' }} />
              </Link>
              <p className="my-4">We combine technical expertise with creative content strategy to offer a full service SEO solution. Our focus is always on your ROI and long-term search authority.
              </p>
              <ul className="list-unstyled footer-social mb-0 mt-sm-0 mt-3">
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:facebook' className="icon-xs" /> </Link>&nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:twitter' className="icon-xs" /> </Link>&nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:github' className="icon-xs" /> </Link>&nbsp;
                </li>
                <li className="list-inline-item">
                  <Link to=""> <IconifyIcon icon='feather:instagram' className="icon-xs" /> </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} lg={6} className="offset-lg-1">
              <Row>
                <Col xs={6} md={4} className="mb-4 mb-md-0">
                  <h6 className="text-footer mb-4 mt-sm-0 mt-5 mt-lg-0">Company</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                  </ul>
                </Col>
                <Col xs={6} md={4} className="mb-4 mb-md-0">
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4 mt-lg-0">Services</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/services">SEO Services</Link></li>
                    <li><Link to="/services">PPC Campaigns</Link></li>
                    <li><Link to="/services">Content Marketing</Link></li>
                  </ul>
                </Col>
                <Col xs={12} md={4} className="mb-4 mb-md-0">
                  <h6 className="text-footer mb-4 mt-sm-0 mt-4 mt-lg-0">More info</h6>
                  <ul className="list-unstyled footer-list">
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">Terms &amp; condition</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col xs={12} sm={6} className="mb-2 mb-sm-0">
              <p> © {currentYear} iSeoAgency. All rights reserved. Created with <IconifyIcon icon="la:heart-solid" className="text-danger" /> by iSeoAgency</p>
            </Col>
            <Col xs={12} sm={6} className="text-sm-end text-start">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="#">- Terms &amp; condition<sup className="text-danger">*</sup></a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>

  )
}

export default AppLayout