import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../img/loguinho.png'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../css/NavBar.css';

function NavBar() {
  return (
    <>
    <div className='img-nav'>
    <Col>
          <Image   src={LOGO} height={65} width={95} />
        </Col>
        </div>

     <Navbar bg="danger" data-bs-theme="danger">
        <Container>
          <Navbar.Brand href={LOGO} width='30' height='30'>Timepiece Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
        <div className='entrar-cadastro'>
        <Nav.Link href="/Cadastro">Cadastro de produtos</Nav.Link>
        </div>

        <div className='entrar-cadastro'>
            <Nav.Link href="/Login">Entrar</Nav.Link>
            </div>
      </Navbar>
    </>
  );
}

export default NavBar;