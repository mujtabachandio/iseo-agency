
// use external placeholder to avoid missing asset issues
import mainBg from '@/assets/images/personal/main-bg.png';

import { Button, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroContactForm from '@/components/HeroContactForm';

const TypedLines = ({ lines, typingMs = 100, deletingMs = 50, pauseMs = 2000 }: { lines: string[]; typingMs?: number; deletingMs?: number; pauseMs?: number }) => {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    const currentLine = lines[lineIdx]
    
    if (isTyping) {
      // Typing mode: add characters
      if (charIdx < currentLine.length) {
        const timer = setTimeout(() => setCharIdx((c) => c + 1), typingMs)
        return () => clearTimeout(timer)
      } else {
        // Finished typing, wait then start deleting
        const timer = setTimeout(() => setIsTyping(false), pauseMs)
        return () => clearTimeout(timer)
      }
    } else {
      // Deleting mode: remove characters
      if (charIdx > 0) {
        const timer = setTimeout(() => setCharIdx((c) => c - 1), deletingMs)
        return () => clearTimeout(timer)
      } else {
        // Finished deleting, move to next line (loop back to first)
        const nextLineIdx = (lineIdx + 1) % lines.length
        setLineIdx(nextLineIdx)
        setIsTyping(true)
      }
    }
  }, [charIdx, lineIdx, isTyping, lines, typingMs, deletingMs, pauseMs])

  const text = lines[lineIdx].slice(0, charIdx)
  return (
    <div className="fw-medium typewrite">
      {text}
      <span className="ms-1" style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
    </div>
  )
}

const Hero = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    // Scroll to contact section or navigate to contact page
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/contact')
    }
  }

  return (
    <section className="hero-one position-relative main-bg" id="home" style={{ backgroundImage: `url(${mainBg})`, backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '80px' }}>
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col xs={12} lg={6} className="text-lg-start mb-4 mb-lg-0">
            <h1 className="hero-title mb-3 font-secondary fo">Welcome To iSeoAgency</h1>
            <div className="mb-3 fs-4 fs-md-5">
              <TypedLines lines={['Dominate Search Results.', 'Measurable SEO Success.', 'Your Partner in Digital Growth and Organic Authority.', 'Not Just Clicks.']} typingMs={100} deletingMs={50} pauseMs={2000} />
            </div>
            <span className="wrap" />
            <div className="mb-4 mb-lg-0">
              <div className="d-inline-block">
                <Button variant='primary' onClick={handleGetStarted} className="w-100 w-md-auto">Get Started</Button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{ maxWidth: '100%' }}>
              <HeroContactForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero