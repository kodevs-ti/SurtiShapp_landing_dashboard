import Router from 'next/router'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../public/img/common/logo-landing.svg'
import logoMobile from '../public/img/common/logo-mobile.svg'

export default function NavbarLanding () {
  return (
    <>
      <Navbar className='navbar background-nav justify-content-start' collapseOnSelect expand='lg' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='toggler'></Navbar.Toggle>
        <Navbar.Brand className='cursor' onClick={() => Router.push('/')}><img src={logo} className='d-none d-lg-block' /><img src={logoMobile} className='d-lg-none logo-mobile pt-1' /> </Navbar.Brand>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <span className='icon-rigth' />
          <Nav className='ml-auto'>
            <Nav.Link className='mr-2' onClick={() => Router.push('/signup')}>REGISTRARME</Nav.Link>
            <Nav.Link className='btn-login ml-5 mr-5' eventKey={2} onClick={() => Router.push('/signin')}>
              <span>LOGIN</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
