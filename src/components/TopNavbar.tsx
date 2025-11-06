import IconifyIcon from '@/components/wrappers/IconifyIcon'
import ContactFormDropdown from '@/components/ContactFormDropdown'
import useScrollEvent from '@/hooks/useScrollEvent'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const TopNavbar = ({ isDark }: { isDark?: boolean }) => {
  const [open, setOpen] = useState<boolean>(false)

  const { scrollY } = useScrollEvent()

  const {pathname} = useLocation()

  const toggleMenu = () => {
    setOpen(!open)
  }


  return (
    <nav className={`navbar navbar-expand-lg fixed-top sticky ${isDark && 'light-active'} ${scrollY > 80 && 'nav-sticky'}`} id="navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={'/logo-removebg-preview.png'} alt='iSeoAgency Logo' height={56} style={{ height: '56px', maxHeight: '56px' }} />
        </Link>
        <Link to="" onClick={toggleMenu} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggle-icon"><IconifyIcon width={24} height={24} icon='feather:menu' /></span>
        </Link>
        <div className={`collapse navbar-collapse ${open && 'show'}`} id="navbarNav">
          <div className="navbar-nav mx-auto navbar-center mt-lg-0 mt-2">
            <li className="nav-item">
              <a href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</a>
            </li>
            <li className="nav-item">
              <a href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>Services</a>
            </li>
            <li className="nav-item">
              <a href="/blogs" className={`nav-link ${pathname === '/blogs' ? 'active' : ''}`}>Blogs</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</a>
            </li>
          </div>
          <div className="mb-4 mb-lg-0">
            <ContactFormDropdown />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default TopNavbar
