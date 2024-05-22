import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png';


function NavBarComponent(){
    return (
        <Navbar collapseOnSelect expand="sm"  bg="dark" data-bs-theme="dark">
          <Container>

            <Navbar.Brand href="/">
                <img src={logo} title='logo' style={{ width: '50px' }} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Films">Filmes</Nav.Link>    
                <Nav.Link href="/Books">Livros</Nav.Link>                  
            </Nav>
            <Nav>
            <Nav className="d-flex col-2">
                <a href="/Login" className="btn btn-success">Logar</a>
            </Nav>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavBarComponent;