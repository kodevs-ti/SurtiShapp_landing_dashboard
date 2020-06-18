import Router from 'next/router'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../public/img/common/logo-landing.svg'
import logoMobile from '../public/img/common/logo-mobile.svg'
import admin from '../public/img/common/admin.jpeg'

export default function NavbarDashboard () {
  return (
    <>
      <Navbar className='navbar background-nav justify-content-start' collapseOnSelect expand='lg' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='toggler'></Navbar.Toggle>
        <Navbar.Brand className='cursor' onClick={() => Router.push('/')}><img src={logo} className='d-none d-lg-block' /><img src={logoMobile} className='d-lg-none logo-mobile pt-1' /> </Navbar.Brand>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <span className='icon-rigth' />
          <Nav className='nav-content align-content-start'>
            <Nav.Link className=''>
              <span className='icon icon-division' />
            </Nav.Link>
            <Nav.Link className=''><img className='img-fluid rounded-circle img-admin' src={admin} /><span className='ml-4 administrator-name'>Fernanda Palacios</span> </Nav.Link>
            <Nav.Link className='btn-logout mr-5 ' eventKey={2} onClick={() => Router.push('/')}>
              <span className='icon icon-logout' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
