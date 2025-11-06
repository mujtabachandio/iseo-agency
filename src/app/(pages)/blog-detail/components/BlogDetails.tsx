
// Using external images to avoid missing asset issues
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <section className="section">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={9}>
            <Card className="border-0 shadow-none">
              <CardBody>
                <div className="mb-5 text-center">
                  <p className="text-muted fw-semibold fs-18">14 February 2024</p>
                  <h3 className="my-3 fs-28 d-block fw-medium text-dark">How to Dominate Search Results with White-Hat SEO Strategies</h3>
                  <p className="text-muted fw-semibold fs-16">Discover proven white-hat SEO techniques that deliver sustainable, long-term organic growth and help your business dominate search engine rankings.</p>
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">SEO</span>&nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">White-Hat</span>&nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">Organic Growth</span>&nbsp;
                  <span className="badge px-3 py-2 bg-light text-dark fw-semibold mt-3 fs-13">Search Rankings</span>&nbsp;
                </div>
                <img src={'https://images.unsplash.com/photo-1529336953121-a0fc1f02177d?auto=format&fit=crop&w=1200&q=60'} alt='personal1' className="img-fluid rounded d-flex mx-auto" />
                <div className="my-5">
                  <p className="text-muted fs-16 mb-4">
                    White-hat SEO strategies are the foundation of sustainable organic growth. Unlike black-hat techniques that may provide short-term gains but risk penalties, white-hat SEO focuses on creating genuine value for users while satisfying search engine guidelines. This approach includes creating high-quality, original content, building natural backlinks through relationships and partnerships, optimizing technical aspects of your website, and ensuring excellent user experience.
                  </p>
                  <p className="text-muted fs-16 mb-4">
                    At iSeoAgency, we've helped hundreds of businesses achieve top rankings through ethical SEO practices. Our methodology combines technical expertise with creative content strategy, ensuring that every optimization serves both search engines and your target audience. The results speak for themselves: our clients consistently see 200%+ increases in organic traffic within the first year.
                  </p>
                  <figure>
                    <blockquote className="blockquote">
                      <p><i>White-hat SEO isn't about gaming the system—it's about building a sustainable online presence that delivers real value to your customers while earning the trust of search engines.</i></p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      iSeoAgency Team in <cite title="SEO Best Practices">SEO Best Practices Guide</cite>
                    </figcaption>
                  </figure>
                  <p className="text-muted fs-16">
                    The key to dominating search results lies in consistent, ethical practices. Focus on creating content that answers your audience's questions, building relationships for natural link building, and maintaining technical excellence. With patience and the right strategy, white-hat SEO delivers measurable, long-term results that drive sustainable business growth.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="mt-3 fs-24 d-block fw-medium text-dark">Latest SEO Insights</h3>
                  <p className="text-muted fw-semibold fs-14">Related Articles</p>
                  <Row>
                    <Col xs={12}>
                      <Row className="row-cols-xl-4 row-cols-lg-4 row-cols-md-2 g-3 justify-content-center">
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=60'} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">Measurable SEO Success...</h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=60'} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">On-Page & Technical SEO...</h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=60'} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">Off-Page SEO Best Practices...</h3>
                          </Link>
                        </Col>
                        <Col>
                          <Link to="" className="d-block bg-card shadow p-2 rounded catagories-box">
                            <img src={'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=60'} alt='personal' className="img-fluid rounded mb-2" />
                            <h3 className="fs-15 m-0 fw-medium">Content Writing for SEO...</h3>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr className="hr-dashed my-3" />
                  <Row>
                    <div className="col-md">
                      <div className="media">
                        <img src={'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=60'} alt='userImg1' className="thumb-sm rounded-circle me-2" />
                        <div className="media-body align-self-center text-truncate">
                        <h6 className="m-0 text-dark fw-medium">Sarah Johnson</h6>
                        <p className="mb-0 fs-12 text-muted fw-medium">SEO Strategist</p>
                        </div>
                      </div>
                    </div>
                    <Col md={'auto'}>
                      <Link to="/blogs" className="btn btn-sm btn-outline-primary px-4">Blogs</Link>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails