import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.jpg';


function NavBarComponent(){
    return (
        <Navbar collapseOnSelect expand="sm"  bg="dark" data-bs-theme="dark">
          <Container>

            <Navbar.Brand href="/1">
                <img src={logo} title='logo' style={{ width: '50px' }} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/1">Home</Nav.Link>
                <Nav.Link href="/2">Filmes</Nav.Link>    
                <Nav.Link href="/3">Livros</Nav.Link>                  
            </Nav>
            <Nav>
                <Nav.Link href="/4">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavBarComponent;