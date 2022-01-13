import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {

    const location = useLocation()
    // location is ALWAYS an object, probably the most important property of it is PATHNAME

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">
                        {/* if location.pathname is '/', add active to the className */}
                        <div className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Home</div>
                    </Link>
                    <Link to="/profile">
                        <div className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}>Profile</div>
                    </Link>
                    <Link to="/detail">
                        <div className={location.pathname === '/detail' ? 'nav-link active' : 'nav-link'}>Detail</div>
                    </Link>
                    <Link to="/stefano">
                        <div className="nav-link">404</div>
                    </Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar