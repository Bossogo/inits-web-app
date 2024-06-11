import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import NavbarOffcanvas from 'react-bootstrap/NavbarOffcanvas';

import Image from 'next/image';
import Link from 'next/link';

type Props = {}
const NavigationBar = (props: Props) => {
  return (
    <>
        <Navbar sticky="top" bg="transparent" expand="xl" className='border-bottom-green'>
            <Container>
            <NavbarBrand href="#home">
                <Image src="/assets/images/logo.png" alt="INITS" width={200} height={45} />
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="mx-auto nav-menu">
                    <Link href="/" className='nav-link'>Home</Link>
                    <Link href="/about" className='nav-link'>About Us</Link>
                    <Link href="/initiatives" className='nav-link'>Initiatives</Link>
                    <Link href="/public-resources" className='nav-link'>Resources</Link>

                    <NavDropdown title="Media Center" id="basic-nav-dropdown">
                        <Link href="/news" className='dropdown-item'>News</Link>
                        <DropdownDivider />
                        <Link href="/events" className='dropdown-item'>Events</Link>
                        <DropdownDivider />
                        <Link href="/articles" className='dropdown-item'>Articles</Link>
                    </NavDropdown>
                </Nav>
                <Link className='btn btn-lg bg-green rounded-5  text-white mx-3' href=""><span className="fs-6">Get in touch</span></Link>
                <Link 
                    className='btn circle border-black ' 
                    href="">
                        <Image src="/assets/icons/bell.svg" className='filter-black' alt="" width={15} height={17}/>
                </Link>
                <Link 
                    className='btn circle border-black ms-3' 
                    href="">
                        <Image src="/assets/icons/search.svg" alt="" width={15} height={17}/>
                </Link>
            </NavbarCollapse>
            </Container>
        </Navbar>
    </>
  )
}
export default NavigationBar