
import logo1 from '@/assets/images/logos/logo-1.svg'
import logo3 from '@/assets/images/logos/logo-3.svg'
// use external avatars to avoid missing assets
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap'

const Slider = () => {
  return (
    <section className="section bg-gradient-light-white" id="review">
      <Container>
        <Row>
          <Col lg={12} className="mx-auto">
            <Card className="rounded shadow ">
              <div className="client-carousel">
                <Row className="align-items-center">
                  <Col lg={10} className="p-5 mx-auto">
                    <div className="client-carousel">
                      <Carousel
                        prevIcon={<IconifyIcon className='text-dark' icon="la:arrow-left" />}
                        nextIcon={<IconifyIcon className='text-dark' icon="la:arrow-right" />}
                        controls={true} indicators={false} id="demo" className="carousel-dark slide" data-bs-ride="carousel" data-bs-wrap="true">
                        <CarouselItem className="text-center" data-bs-interval={4000}>
                          <img src={logo1} alt='logo1' className="my-3" height={70} />
                          <p className="font-secondary fs-22 fst-italic mb-4 px-4">
                            iSeoAgency transformed our online presence. Their white-hat SEO strategies delivered measurable results within months. We saw a 200% increase in organic traffic and significantly improved search rankings. Highly recommended!
                          </p>
                          <img src={'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=120&q=60'} alt='user3' className="thumb-lg rounded-circle d-block mx-auto" />
                          <span className="text-uppercase text-muted fs-14 fw-medium">- Sarah Johnson, CEO</span>
                          <ul className="list-inline mb-0 align-self-center">
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16" /></li>
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16 ms-n2" /></li>
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16 ms-n2" /></li>
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16 ms-n2" /></li>
                            <li className="list-inline-item"><i className="la la-star-half-o text-warning fs-16 ms-n2" /></li>
                          </ul>
                        </CarouselItem>
                        <CarouselItem className="text-center" data-bs-interval={4000}>
                          <img src={logo3} alt='logo3' className="my-3" height={70} />
                          <p className="font-secondary fs-22 fst-italic mb-4 px-4">
                            The dedicated SEO manager assigned to our account made all the difference. Transparent monthly reporting and focus on ROI helped us dominate our niche. iSeoAgency is a true partner in digital growth.
                          </p>
                          <img src={'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=60'} alt='user5' className="thumb-lg rounded-circle d-block mx-auto" />
                          <span className="text-uppercase text-muted fs-14 fw-medium">- Michael Chen, Marketing Director</span>
                          <ul className="list-inline mb-0 align-self-center">
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16" /></li>
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16 ms-n2" /></li>
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16 ms-n2" /></li>
                            <li className="list-inline-item"><i className="la la-star text-warning fs-16 ms-n2" /></li>
                            <li className="list-inline-item"><i className="la la-star-half-o text-warning fs-16 ms-n2" /></li>
                          </ul>
                        </CarouselItem>
                      </Carousel>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Slider